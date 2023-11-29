import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header_wrapper">
        <Link to="/">
          <div className="logo">Glass Painting</div>
        </Link>

        <nav className="navigation_wrapper">
          <Link className="router_link" to="/">
            Home
          </Link>

          <Link className="router_link" to="/order">
            Order your own
          </Link>

          <Link className="router_link" to="/catalogue">
            Catalogue
          </Link>

          <Link className="router_link" to="/liked-articles">
            My Liked Articles
          </Link>
        </nav>

        <div className="search_bar_wrapper">
          <div className="loged_user">Hello, .........!</div>
        </div>

        <div className="user_buttons_wrapper">
          <button className="logout user_guide_button">Logout</button>

          <Link className="user_guide_button" to="/login">
            Login
          </Link>

          <Link className="user_guide_button" to="/register">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
