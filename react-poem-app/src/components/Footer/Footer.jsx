export default function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="logo_and_contacts_wrapper">
          <div className="logo">Glass Painting</div>

          <div className="contact_info">Contact info</div>

          <div className="contact_info">
            15 George Sava Rakovski, Dolna banya, Sofia Region, Bulgaria
          </div>

          <div className="contact_info">
            Telephone: <a href="tel:0885082586">0885082586</a>
          </div>

          <div className="contact_info">
            Email:
            <a href="mailto:nadetodb1@abv.bg">nadetodb1@abv.bg</a>
          </div>
        </div>

        <div className="social_media_icons">
          <a
            href="https://www.facebook.com/groups/2780589892240723/"
            target="_blank"
          >
            <img className="social_icon" src="/assets/facebook.svg" />
          </a>
          <a href="https://www.instagram.com/stuklorisuvane/" target="_blank">
            <img className="social_icon" src="/assets/instagram.svg" />
          </a>

          <a href="https://youtube.com" target="_blank">
            <img className="social_icon" src="/assets/youtube.svg" />
          </a>
        </div>
      </div>

      <div className="all_right_reserved_wrapper">
        <div className="footer_copyright">©Webecy - All Rights Reserved</div>
      </div>
    </footer>
  );
}
