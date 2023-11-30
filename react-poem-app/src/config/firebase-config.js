import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzfiq1qBergWYV--gvISfYpfoW2U-AvyI",

  authDomain: "glass-painting-30b2e.firebaseapp.com",

  projectId: "glass-painting-30b2e",

  storageBucket: "glass-painting-30b2e.appspot.com",

  messagingSenderId: "641043949351",

  appId: "1:641043949351:web:d5ac50143645624242ab02",

  measurementId: "G-ETXNJ9BZD7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
