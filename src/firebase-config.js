import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0W-G07HxhJbS9fsxqp9c3996QmCJbXkA",
  authDomain: "k-studio-4bb78.firebaseapp.com",
  projectId: "k-studio-4bb78",
  storageBucket: "k-studio-4bb78.appspot.com",
  messagingSenderId: "58114384418",
  appId: "1:58114384418:web:582cd412cd7744cb94207b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
