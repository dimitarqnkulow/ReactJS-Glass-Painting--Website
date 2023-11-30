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
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  };

  const registerSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/catalogue/:articleId" element={<Details />} />
        <Route path="/order" element={<Order />} />
        <Route path="/complete" element={<OrderComplete />} />
        <Route path="/liked-articles" element={<Liked />} />
        <Route
          path="/login"
          element={<Login loginSubmitHandler={loginSubmitHandler} />}
        />
        <Route
          path="/register"
          element={<Register registerSubmitHandler={registerSubmitHandler} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
