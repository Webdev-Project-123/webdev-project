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

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <BrowserRouter>
      <SearchContext.Provider value={[searchValue, setSearchValue]}>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path='categories' element={<ProductPage />} />
          <Route path="categories/:category/" element={<ProductPage />} />
          <Route path="search/:searchValue/" element={<SearchPage />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="upload" element={<AddProduct />} />
          <Route path="*" />
        </Routes>
      </SearchContext.Provider>
    </BrowserRouter>
    // <AddProduct />
  );
}

export default App;
