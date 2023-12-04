import { Link } from "react-router-dom";

export default function Article({ id, articleName, price, imgUrl }) {
  return (
    <div className="product_wrapper">
      <div className="product_item">
        <img src={imgUrl} className="product_image" />

        <p className="item_name">{articleName}</p>

        <p className="product_price">
          ${price}
          <span className="product_card_discount_price">${price * 1.25}</span>
        </p>
        <Link className="product_card_button" to={`/catalogue/${id}`}>
          Details
        </Link>
      </div>
    </div>
  );
}
