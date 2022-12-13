import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6CdTlFHDD039cBYWcLHYYdlXdD5t2nU0",
  authDomain: "house-marketplace-app-cf059.firebaseapp.com",
  projectId: "house-marketplace-app-cf059",
  storageBucket: "house-marketplace-app-cf059.appspot.com",
  messagingSenderId: "889333341347",
  appId: "1:889333341347:web:930bdd5795356cfae3f316",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
