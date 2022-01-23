<<<<<<< HEAD
import React from "react";
import Detail from "./DetailProduct/Detail"
import Header from "./Home/Header"
import Footer from "./Home/Footer"
import Rating from "./Home/Rating"
function App() {
  return (
    <div className="">
      <Header/>
     <Detail />
     <Footer/>
    </div>
=======
import React, { useState } from "react";
import SignUp from "./Person/SignUp";
import Login from "./Person/Login";
import Profile from "./Person/Profile";
import Home from "./Home/Home";
import ProductPage from "./ProductPage/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage/SearchPage";
import { SearchContext } from './SearchPage/SearchContext';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <BrowserRouter>
      <SearchContext.Provider value={[searchValue, setSearchValue]}>
        <Routes path='/'>
          <Route index element={<Home />} />
          <Route path='categories/*' element={<ProductPage />} />
          <Route path='search/*' element={<SearchPage />} />
          <Route path='*' />
        </Routes>
      </SearchContext.Provider>
    </BrowserRouter>
>>>>>>> 0f19da8c6acc6d7af61ab815c4bd9fe44b513c21
  );
}

export default App;
