import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
