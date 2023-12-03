export default function Home() {
  return (
    <div className="home_wrapper">
      <div className="about_us_wrapper">
        <div className="about_us_header">About us</div>

        <div className="image_and_text_wrapper">
          <div className="video_responsive">
            <video width="500px" height="500px" autoPlay="autoplay">
              <source src="assets/20230702_164422.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="header_and_text_wrapper">
            <div className="about_us_header_secondary">
              About me and my first touch with painting on glass
            </div>

            <div className="about_us_text">
              My name is Nadezhda Yankulova. In 2019 I participated in a
              workshop for Christmas toys, where I met the idea of painting on
              glass. With the help of a brush, 3 colors of special glass paints,
              a ribbon and a light bulb I made my first glass gizmo- a Christmas
              tree toy. March 2020 because of the Corona virus I stayed at home
              waiting to start working online. I decided to diversify my daily
              routine by ordering a set of basic glass paint colors, a brush and
              wine glasses to paint and give to my best friend who has a
              birthday the end of March. In the meantime, I've been studying
              ecology. While studying I realized how important it is to recycle
              and use every thing as long as we can, if possible, and not just
              throw it away after the first use. I then decided that my way of
              recycling would be painting and decorating. I started to paint on
              all kinds of glass objects under the motto "Let's breathe new life
              into something old" I collected from familiar bottles, light
              bulbs,glasses, jars and even records that no longer worked and
              actively created on them. But for recycling to be meaningful it
              wasn't enough to just paint, the junk had to find new owners. I
              made a page on Facebook - painting on glass and on Instagram
              -stuklorisuvane, thanks to them I introduced people to my idea and
              creativity and my objects came to life in their new home. You can
              see some of them in Gallery.
            </div>
          </div>
        </div>
      </div>

      <div className="product_banner_wrapper">
        <div className="product_description_wrapper">
          <div className="product_header">My first project "Wine glasses"</div>
          <p className="product_description">
            My first idea I realized when I started painting on glass. March
            2020 - everything is closed, there is nowhere to go out to drink
            even coffee - "lockdown"- Coronavirus. I ordered online a set of
            basic glass paint colors, a brush and 2 wine glasses. So it all
            began...
          </p>
        </div>

        <div className="product_banner_image">
          <img className="image_responsive" src="assets/My first glasses.jpg" />
        </div>
      </div>

      <div className="trending_products_wrapper">
        <div className="trending_products_header">Trending products</div>
        <div className="trendings_products_list">
          <div className="product_card">
            <img className="product_card_image" src="" />
            <div className="product_card_name">Article Name</div>
            <div className="product_card_price">
              $13
              <span className="product_card_discount_price">$12</span>
            </div>
            <button className="product_card_button">Details</button>
          </div>
          <div className="product_card">
            <img className="product_card_image" src="" />
            <div className="product_card_name">Article Name</div>
            <div className="product_card_price">
              $13
              <span className="product_card_discount_price">$12</span>
            </div>
            <button className="product_card_button">Details</button>
          </div>
          <div className="product_card">
            <img className="product_card_image" src="" />
            <div className="product_card_name">Article Name</div>
            <div className="product_card_price">
              $13
              <span className="product_card_discount_price">$12</span>
            </div>
            <button className="product_card_button">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
