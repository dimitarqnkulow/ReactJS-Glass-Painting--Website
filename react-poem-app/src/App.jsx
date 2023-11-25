import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
function App() {
  const [articles, setArticles] = useState([]);
  const usersCollectionRef = collection(db, "articles");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            {" "}
            <h1>Article:{article.articleName}</h1>
          </div>
        );
      })}
    </>
  );
}

export default App;
