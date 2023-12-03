import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { user, isAuthenticated } = useAuth();
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
          {isAuthenticated && (
            <>
              <Link className="router_link" to="/order">
                Order your own
              </Link>
              <Link className="router_link" to="/liked-articles">
                My Liked Articles
              </Link>
            </>
          )}

          <Link className="router_link" to="/catalogue">
            Catalogue
          </Link>
        </nav>

        <div className="search_bar_wrapper">
          {user && <div className="loged_user">Hello, {user.email}!</div>}
        </div>

        <div className="user_buttons_wrapper">
          {isAuthenticated && (
            <Link className="logout user_guide_button" to="/logout">
              Logout
            </Link>
          )}
          {!isAuthenticated && (
            <>
              <Link className="user_guide_button" to="/login">
                Login
              </Link>

              <Link className="user_guide_button" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
