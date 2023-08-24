import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut as fbSignOut,
	type User
} from "firebase/auth";
import { getFirestore, doc, getDoc, writeBatch, onSnapshot, Timestamp } from "firebase/firestore";
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

export const configData: Readable<ConfigData | null> = derived(user, ($user, set) => {
	return docStore<ConfigData>(`config/voteCloseDate`).subscribe(set);
});

interface VoteData {
	gender: string;
}

export const voteData: Readable<VoteData | null> = derived(user, ($user, set) => {
	if ($user) {
		return docStore<VoteData>(`votes/test`).subscribe(set);
	} else {
		set(null);
	}
});

// export const userData: Readable<Config | null> = derived(user, ($user, set) => {
// 	if ($user) {
// 		return docStore<Config>(`config/${$user.uid}`).subscribe(set);
// 	} else {
// 		set(null);
// 	}
// });
