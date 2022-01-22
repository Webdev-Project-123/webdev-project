import React from "react";
import { render } from "react-dom";
import Bought from "./Bought";
import SignUp from "./Person/SignUp";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/sign-up" element={<SignUp/>} />
          <Route path="/bought" element={<Bought/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
