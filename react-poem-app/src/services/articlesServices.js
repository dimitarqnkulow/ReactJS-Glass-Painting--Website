import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

const articlesCollectionRef = collection(db, "articles");
const createUser = async () => {
  await addDoc(usersCollectionRef, {});
};
useEffect(() => {
  const getArticles = async () => {
    const data = await getDocs(usersCollectionRef);
    setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  getArticles();
}, []);
