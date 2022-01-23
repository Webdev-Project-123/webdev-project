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

function App() {
  return (
    <BrowserRouter>
      <Routes path='/'>
        <Route index element={<Home />} />
        <Route path='categories' element={<ProductPage />} />
        <Route path='search/:searchValue' element={<SearchPage />} />
        <Route path='search' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
