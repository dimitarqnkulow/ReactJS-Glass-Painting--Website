import { useEffect, useState } from "react";
import * as articleServices from "../../services/articlesServices";
import Article from "./Article/Article";

export default function Catalogue() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleServices.getAllArticles().then((result) => setArticles(result));
  }, []);

  return (
    <div className="catalogue_box">
      <div className="search_wrapper">
        <h1 className="catalogue_header">Catalogue of Available items</h1>
        {/* <div className="search_bar_wrapper">
          <input className="search_bar_input" type="text" />
          <button className="search_bar_button" type="submit">
            <img src="assets/uil_search.svg" />
          </button>
        </div> */}
      </div>

      <div className="articles_wrapper">
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}
