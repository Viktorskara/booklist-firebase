import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzV1F_vfq37_YodBGZq1k2WWq9nPESjDc",
  authDomain: "book-llist-with-firebase.firebaseapp.com",
  projectId: "book-llist-with-firebase",
  storageBucket: "book-llist-with-firebase.firebasestorage.app",
  messagingSenderId: "405228324818",
  appId: "1:405228324818:web:f3f30c318a4093aef2aa0b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
