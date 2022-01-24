import Detail from "./DetailProduct/Detail";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import Rating from "./Home/Rating";
import Average from "./DetailProduct/Average";
import SumStar from "./DetailProduct/SumStar";
const item = {
  id: 1,
  "uploaded-date": "2022-02-30",
  "publication-date": "2019-05-24",
  authors: ["Austin Govella"],
  "publishing-company": "O'Reilly Media, Inc.",
  language: "English",
  title: "Collaborative Product Design",
  description:
    "<span><div><p>You can launch a new app or website in days by piecing together frameworks and hosting on AWS. Implementation is no longer the problem. But that speed to market just makes it tougher to confirm that your team is actually building the right product.</p><p>Ideal for agile teams and lean organizations, this guide includes 11 practical tools to help you collaborate on strategy, user research, and UX. Hundreds of real-world tips help you facilitate productive meetings and create good collaboration habits. Designers, developers, and product owners will learn how to build better products much faster than before.</p><p>Topics include:</p><ul><li><b>Foundations for collaboration and facilitation:</b> Learn how to work better together with your team, stakeholders, and clients</li><li><b>Project strategy:</b> Help teams align with shared goals and vision</li><li><b>User research and personas:</b> Identify and understand your users and share that vision with the broader organization</li><li><b>Journey maps:</b> Build better touchpoints that improve conversion and retention</li><li><b>Interfaces and prototypes:</b> Rightsize sketches and wireframes so you can test and iterate quickly</li></ul></div></span>",
  pages: 468,
  image: "https://learning.oreilly.com/library/cover/9781491975022/750w/",
  price: 35.49,
  "in-stock": 100,
  discount: 30.49,
  rating: [50, 10, 0, 0, 0],
  comments: [
    {
      avatar: "https://daisyui.com/tailwind-css-component-profile-3@56w.png",
      content: "Excellent!",
      stars: 5,
      name: "Peter",
    },
    {
      avatar: "https://daisyui.com/tailwind-css-component-profile-3@56w.png",
      content: "Highly recommended!",
      stars: 4,
      name: "Jessica",
    },
    {
      avatar: "https://daisyui.com/tailwind-css-component-profile-3@56w.png",
      content: "I had to return for a refund due to the poor quality.",
      stars: 1,
      name: "Thomas Edison",
    },
  ],
  categories: ["Design"],
};
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

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <BrowserRouter>
      <SearchContext.Provider value={[searchValue, setSearchValue]}>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="categories" element={<ProductPage />} />
          <Route path="categories/:category/" element={<ProductPage />} />
          <Route path="search/:searchValue/" element={<SearchPage />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="upload" element={<AddProduct />} />
          <Route path="account/:userid" element={<Profile />} />
          <Route
            path="product/:productID"
            element={<Detail product={item} />}
          />
          <Route path="reset-password/:token" element={<ResetPassword />} />
          <Route path="/bought" element={<Bought />} />
          <Route path="*" />
        </Routes>
      </SearchContext.Provider>
    </BrowserRouter>
    // <AddProduct />
  );
}

export default App;
