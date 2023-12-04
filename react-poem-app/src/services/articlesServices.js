import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const articlesCollectionRef = collection(db, "articles");

export const getAllArticles = async () => {
  const data = await getDocs(articlesCollectionRef);

  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};
