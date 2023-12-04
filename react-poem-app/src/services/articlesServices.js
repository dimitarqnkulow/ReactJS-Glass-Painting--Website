import { db } from "../config/firebase-config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const articlesCollectionRef = collection(db, "articles");

export const getAllArticles = async () => {
  const data = await getDocs(articlesCollectionRef);

  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const getOneArticle = async (id) => {
  const articleRef = doc(db, "articles", id);
  const data = await getDoc(articleRef);

  return data.data();
};
