import Detail from "./DetailProduct/Detail";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import Rating from "./Home/Rating";
import Average from "./DetailProduct/Average";
import SumStar from "./DetailProduct/SumStar";
import React, { useState } from "react";
import SignUp from "./Person/SignUp";
import Login from "./Person/Login";
import Profile from "./Person/Profile";
import Home from "./Home/Home";
import AddProduct from "./Person/Admin/AddProduct";
import ProductPage from "./ProductPage/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage/SearchPage";
import { SearchContext } from "./SearchPage/SearchContext";
import ResetPassword from "./Person/ResetPassword";
import Bought from "./Bought";
import { CartContext } from "./GloblalContext/CartContext";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [cart, setCart] = useState([]);

  {
    /* Init cart */
  }
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  return (
    <BrowserRouter>
      <CartContext.Provider value={[cart, setCart]}>
        <SearchContext.Provider value={[searchValue, setSearchValue]}>
          <Routes path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="account/:userid" element={<Profile />} />
            <Route path="/:resettoken" element={<ResetPassword />} />
            <Route path="categories" element={<ProductPage />} />
            <Route path="categories/:category/" element={<ProductPage />} />
            <Route path="search/:searchValue/" element={<SearchPage />} />
            <Route path="upload" element={<AddProduct />} />
            <Route path="product/:productID" element={<Detail />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />
            <Route path="/bought" element={<Bought />} />
            <Route path="*" />
          </Routes>
        </SearchContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
}
export default App;
