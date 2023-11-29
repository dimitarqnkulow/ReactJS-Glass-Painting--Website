export default function Details() {
  return (
    <div>
      <div class="details_page_header">
        <div class="header">
          <a class="back_button"> &larr; Back</a>
          <h1 class="heading">Product Details</h1>
        </div>
      </div>

      <div class="product_wrapper">
        <div class="product_box">
          <div class="image_wrapper">
            <img class="product_image" src="{{ article.img }}" />
          </div>

          <div class="name_and_description_wrapper">
            <h2 class="product_name">{}</h2>

            <div class="likes_counter">
              <img id="likes_icon" src="assets/likes_count.png" />

              <p class="likes_count">{}</p>
            </div>
            <p class="product_material">Optional price</p>
            <div class="product_card_price">
              ${}
              <span class="product_card_discount_price">$</span>
            </div>

            <div class="product_description_wrapper">
              <p class="product_material">Description</p>

              <p class="product_description">{}</p>
            </div>

            <div class="product_description_wrapper">
              <p class="product_material">Materials</p>

              <p class="product_description">{}</p>
            </div>

            <div class="product_description_wrapper">
              <p class="product_material">Crafting time</p>

              <p class="product_description">{} days</p>
            </div>

            <div class="buttons_wrapper">
              <div class="like_icon"></div>

              <div class="unlike_icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
