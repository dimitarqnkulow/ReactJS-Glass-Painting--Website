import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Path from "../../utils/paths";

export default function Header() {
  const { user, isAuthenticated } = useAuth();
  return (
    <header>
      <div className="header_wrapper">
        <Link to={Path.Home}>
          <div className="logo">Glass Painting</div>
        </Link>

        <nav className="navigation_wrapper">
          <Link className="router_link" to={Path.Home}>
            Home
          </Link>
          {isAuthenticated && (
            <>
              <Link className="router_link" to={Path.Order}>
                Order your own
              </Link>
              <Link className="router_link" to={Path.Liked}>
                My Liked Articles
              </Link>
            </>
          )}

          <Link className="router_link" to={Path.Catalogue}>
            Catalogue
          </Link>
        </nav>

        <div className="search_bar_wrapper">
          {isAuthenticated && (
            <div className="loged_user">Hello, {user.email}!</div>
          )}
        </div>

        <div className="user_buttons_wrapper">
          {isAuthenticated && (
            <Link className="logout user_guide_button" to={Path.Logout}>
              Logout
            </Link>
          )}
          {!isAuthenticated && (
            <>
              <Link className="user_guide_button" to={Path.Login}>
                Login
              </Link>

              <Link className="user_guide_button" to={Path.Register}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
