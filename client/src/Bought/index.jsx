import React, { useEffect, useState, useContext } from "react";
import Header from "../Home/Header";
import Table from "./components/table";
import Total from "./components/total";
import { isLoginContext } from "../GloblalContext/context";
// import { useDispatch, useSelector } from "react-red  ux";
// import { actListOrder } from './modules/action';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Home/Footer";
export default function Bought() {
  //  let dispatch=useDispatch();
  const [isLogin] = useContext(isLoginContext);
  const [state, setState] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) navigate("/login");
  }, [isLogin]);
  useEffect(() => {
    axios
      .get(`https://5f901c99e0559c0016ad6146.mockapi.io/orders`)
      .then((result) => {
        setState(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //  console.log(state);
  return (
    <div>
      <Header />
      <div className="container mx-auto min-h-screen pt-5 font-robotoS">
        <h1 className="text-center py-4 ">All orders</h1>
        <Table orders={state} />
      </div>
      <Footer />
    </div>
  );
}
