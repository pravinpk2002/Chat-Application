import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9Zx5nEbkETBEOoLuJdZZTkJnSj4BeBt8",
  authDomain: "chat-app-a7b6d.firebaseapp.com",
  projectId: "chat-app-a7b6d",
  storageBucket: "chat-app-a7b6d.appspot.com",
  messagingSenderId: "312387521472",
  appId: "1:312387521472:web:60e57040c9c6ee69ba9625"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
