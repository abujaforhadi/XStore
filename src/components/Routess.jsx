import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Catwise from "./pages/Catwise";

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Feedback" element={<Feedback />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Products/:id" element={<ProductDetail />}></Route>
        <Route path="/:type" element={<Catwise />}></Route>
      </Routes>
    </div>
  );
};

export default Routess;
