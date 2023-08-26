import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut as fbSignOut,
	type User
} from "firebase/auth";
import {
	getFirestore,
	doc,
	onSnapshot,
	type Timestamp,
	type Query,
	type Firestore,
	collection
} from "firebase/firestore";
import type { CollectionReference } from "firebase/firestore";
import { writable, type Readable, derived } from "svelte/store";

const firebaseConfig = {
	apiKey: "AIzaSyDb92n5mjsYB_4hEgltsuDqw6PP6AwBFPs",
	authDomain: "babyrose-211c9.firebaseapp.com",
	projectId: "babyrose-211c9",
	storageBucket: "babyrose-211c9.appspot.com",
	messagingSenderId: "376475784428",
	appId: "1:376475784428:web:c97d991984b12f662501c9"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();

export const signInWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	await signInWithPopup(auth, provider);
};

export const signOut = async () => {
	fbSignOut(auth);
};

const userStore = () => {
	let unsubscribe: () => void;

	if (!auth || !globalThis.window) {
		console.warn("Auth is not initialized or not in browser");
		const { subscribe } = writable<User | null>(null);
		return {
			subscribe
		};
	}

	const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
		unsubscribe = onAuthStateChanged(auth, (user) => {
			set(user);
		});

		return () => unsubscribe();
	});

	return {
		subscribe
	};
};

export const user = userStore();

export function docStore<T>(path: string) {
	let unsubscribe: () => void;

	const docRef = doc(db, path);

	const { subscribe } = writable<T | null>(null, (set) => {
		unsubscribe = onSnapshot(docRef, (snapshot) => {
			set((snapshot.data() as T) ?? null);
		});

		return () => unsubscribe();
	});

	return {
		subscribe,
		ref: docRef,
		id: docRef.id
	};
}

interface ConfigData {
	voteCloseDate: Timestamp;
}

const configDataStore = () => {
	return docStore<ConfigData>(`config/voteCloseDate`);
};

export const configData = configDataStore();

export interface VoteData {
	gender: string;
	name: string;
	email: string;
}

export const voteData: Readable<VoteData | null> = derived(user, ($user, set) => {
	return docStore<VoteData>(`votes/${$user?.uid}`).subscribe(set);
});

const voteDataListStore = () => {
	return collectionStore<VoteData>(db, `votes`);
};

export const voteDataList = voteDataListStore();

interface VoteStore {
	isClosed: boolean;
}

export const voteStore = () => {
	const { subscribe, set } = writable<VoteStore>({
		isClosed: true
	});

	const setVoteClosed = (isClosed: boolean) => {
		set({ isClosed });
	};

	return {
		subscribe,
		setVoteClosed
	};
};

export const vote = voteStore();

export function collectionStore<T>(
	firestore: Firestore,
	ref: string | Query | CollectionReference,
	startWith: T[] | undefined = undefined
) {
	let unsubscribe: () => void;

	// Fallback for SSR
	if (!firestore || !globalThis.window) {
		console.warn("Firestore is not initialized or not in browser");
		const { subscribe } = writable(startWith);
		return {
			subscribe,
			ref: null
		};
	}

	const colRef = typeof ref === "string" ? collection(firestore, ref) : ref;

	const { subscribe } = writable<T[] | undefined>(startWith, (set) => {
		unsubscribe = onSnapshot(colRef, (snapshot) => {
			const data = snapshot.docs.map((s) => {
				return { id: s.id, ref: s.ref, ...s.data() } as T;
			});
			set(data);
		});
		return () => unsubscribe();
	});

	return {
		subscribe,
		ref: colRef
	};
}
