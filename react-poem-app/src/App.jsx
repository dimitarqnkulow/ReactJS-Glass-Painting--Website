import "../public/styles/style.css";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalogue from "./components/Catalogue/Catalogue";
import Order from "./components/Order/Order";
import Liked from "./components/Liked/Liked";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";
import OrderComplete from "./components/OrderComplete/OrderComplete";
import { AuthProvider } from "./context/AuthContext";
import Path from "./utils/paths";
import Logout from "./components/Logout/Logout";
import PrivateRoute from "./utils/PrivateRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.Catalogue} element={<Catalogue />} />
          <Route path={Path.Details} element={<Details />} />
          <Route element={<PrivateRoute />}>
            <Route path={Path.Order} element={<Order />} />
            <Route path={Path.Complete} element={<OrderComplete />} />
            <Route path={Path.Liked} element={<Liked />} />
          </Route>
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Logout} element={<Logout />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
