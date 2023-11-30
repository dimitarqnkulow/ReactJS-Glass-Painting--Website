export default function Liked() {
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
            <div className="item">
              <div className="item_wrapper">
                <div className="item_image_wrapper">
                  <img
                    src="{{ article.img }}"
                    alt=""
                    className="product_image"
                  />

                  <img
                    src="/assets/remove_icon.svg"
                    alt=""
                    className="product_image_icon"
                  />
                </div>

                <div className="item_description">
                  <div className="item_name">{}</div>
                </div>
              </div>

              <div className="item_price">{}</div>

              <div className="item_quantity_wrapper">
                <div className="item_price">{} days</div>
              </div>

              <div className="item_total_price">${}</div>
            </div>

            <div className="noLiked">
              <p>You didn't like any articles! :)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}