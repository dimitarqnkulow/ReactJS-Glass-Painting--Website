import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import * as articleServices from "../../services/articlesServices";

export default function Liked() {
  const [likedArticles, setLikedArticles] = useState([]);
  const { user } = useAuth();
  const { email } = user;

  useEffect(() => {
    articleServices
      .getLikedArticles(email)
      .then((result) => setLikedArticles(result));
  }, []);

  const dislike = async (articleId, userEmail) => {
    setLikedArticles((state) =>
      state.filter((likedArticle) => likedArticle.id !== articleId)
    );
    await articleServices.dislikeArticle(articleId, userEmail);
  };

  return (
    <>
      <div className="details_page_header">
        <div className="header">
          <a className="back_button"></a>
          <h1 className="heading">My Favourite Articles</h1>
        </div>
      </div>

      <div className="cart_wrapper">
        <div className="products_list">
          <div className="list_header_wrapper">
            <div className="list_header_item first_item">Article</div>
            <div className="list_header_item second_item">Mateirals</div>
            <div className="list_header_item second_item">Crafting</div>
            <div className="list_header_item second_item">Optional Price</div>
          </div>
          <div className="items_wrapper">
            {likedArticles.map((likedArticle) => (
              <div className="item" key={likedArticle.id}>
                <div className="item_wrapper">
                  <div className="item_image_wrapper">
                    <img
                      src={likedArticle.imgUrl}
                      alt=""
                      className="product_image"
                    />

                    <img
                      src="/assets/remove_icon.svg"
                      alt=""
                      className="product_image_icon"
                      onClick={() => {
                        return dislike(likedArticle.id, email);
                      }}
                    />
                  </div>

                  <div className="item_description">
                    <div className="item_name">{likedArticle.articleName}</div>
                  </div>
                </div>

                <div className="item_price">{likedArticle.materials}</div>

                <div className="item_quantity_wrapper">
                  <div className="item_price">{likedArticle.crafting} days</div>
                </div>

                <div className="item_total_price">${likedArticle.price}</div>
              </div>
            ))}
            {!likedArticles.length && (
              <div className="noLiked">
                <p>You didn't like any articles! :)</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
