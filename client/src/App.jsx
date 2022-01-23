import React, { useState } from "react";
import SignUp from "./Person/SignUp";
import Login from "./Person/Login";
import Profile from "./Person/Profile";
import Home from "./Home/Home";
import ProductPage from "./ProductPage/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage/SearchPage";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import AddProduct from "./Person/Admin/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="upload" element={<AddProduct />} />
        {/* <Route path="search" /> */}
      </Routes>
    </BrowserRouter>
    // <AddProduct />
  );
}

export default App;
