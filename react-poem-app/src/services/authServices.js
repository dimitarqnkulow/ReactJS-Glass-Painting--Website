import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase-config";

export const register = async (email, password, repeatPassword) => {
  if (password !== repeatPassword) {
    return new Error("Passwords doesn't match!");
  }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return await signOut(auth);
};
