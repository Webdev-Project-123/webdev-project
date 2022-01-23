import React, { useEffect, useState } from 'react';
import Header from '../Home/Header';
import Table from './components/table';
import Total from './components/total';
// import { useDispatch, useSelector } from "react-red  ux";
// import { actListOrder } from './modules/action';
import axios from 'axios';
import Footer from '../Home/Footer';
export default function Bought() {
  //  let dispatch=useDispatch();
  const [state,setState]=useState([]);
   useEffect(()=>{
     
     axios.get(`https://5f901c99e0559c0016ad6146.mockapi.io/orders`)
     .then((result)=>{setState(result.data)})
     .catch((err)=>{
       console.log(err);

     })
   },[]);
  //  console.log(state);
  return <div>
      <Header/>
      <div className='container mx-auto  pt-5'>
      <h1 className='text-center py-4 '>All orders</h1>
        <Table orders={state} />
        
        
     
        
      
      </div>
      
      
  </div>;
}
