import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import * as articleServices from "../../services/articlesServices";

export default function Details() {
  const { articleId } = useParams();
  const { user } = useAuth();
  const { email } = user;
  const [article, setArticle] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    articleServices.getOneArticle(articleId).then((result) => {
      setArticle(result);

      setLikes(result.likes);

      if (result.likes.includes(email)) {
        setIsLiked(true);
      }
    });
  }, []);

  const like = async () => {
    setLikes((state) => [...state, email]);
    setIsLiked(true);
    await articleServices.likeArticle(articleId, email);
  };
  const dislike = async () => {
    setLikes((state) => state.filter((like) => like !== email));
    setIsLiked(false);
    await articleServices.dislikeArticle(articleId, email);
  };
  return (
    <div>
      <div className="details_page_header">
        <div className="header">
          <a className="back_button"> &larr; Back</a>
          <h1 className="heading">Product Details</h1>
        </div>
      </div>

      <div className="product_wrapper">
        <div className="product_box">
          <div className="image_wrapper">
            <img className="product_image_details" src={article.imgUrl} />
          </div>

          <div className="name_and_description_wrapper">
            <h2 className="product_name">{article.articleName}</h2>

            <div className="likes_counter">
              <img id="likes_icon" src="/assets/likes_count.png" />

              <p className="likes_count">{likes.length}</p>
            </div>
            <p className="product_material">Optional price</p>
            <div className="product_card_price">
              ${article.price}
              <span className="product_card_discount_price">
                ${article.price * 1.25}
              </span>
            </div>

            <div className="product_description_wrapper">
              <p className="product_material">Description</p>

              <p className="product_description">{article.description}</p>
            </div>

            <div className="product_description_wrapper">
              <p className="product_material">Materials</p>

              <p className="product_description">{article.materials}</p>
            </div>

            <div className="product_description_wrapper">
              <p className="product_material">Crafting time</p>

              <p className="product_description">{article.crafting} days</p>
            </div>

            <div className="buttons_wrapper">
              {isLiked && <div className="like_icon" onClick={dislike}></div>}
              {!isLiked && <div className="unlike_icon" onClick={like}></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
