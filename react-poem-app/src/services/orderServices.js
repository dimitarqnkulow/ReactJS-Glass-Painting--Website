import { db } from "../config/firebase-config";
import { addDoc, collection } from "firebase/firestore";

const ordersCollectionRef = collection(db, "orders");

export const createOrder = async (data) => {
  console.log(data);
  await addDoc(ordersCollectionRef, data);
};
