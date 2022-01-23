import React, { useState } from "react";
import "./Styles/customProductThumb.css";
import Rating from "./Rating";

const ProductThumb = ({ productData }) => {
  const rating = (ratings) => {
    let length =
      ratings.one + ratings.two + ratings.three + ratings.four + ratings.five;
    let sum =
      ratings.one +
      ratings.two * 2 +
      ratings.three * 3 +
      ratings.four * 4 +
      ratings.five * 5;
    return sum / length;
  };

  const sample = {
    one: 2,
    two: 2,
    three: 5,
    four: 9,
    five: 20,
  };

  return <div className='m-auto scale-95 lg:scale-100 bg-gray-50 flex-1 rounded-lg transition duration-300 hover:cursor-pointer 
  hover:shadow-tuanProductThumb py-2 px-2 my-2 w-[180px] sm:w-[220px] max-h-[360px]'>
    <div className='h-[70%]'>
      <img src={productData.image} className='m-auto rounded-lg object-fill h-full' />
    </div>

    <p className='title h-[13%] px-2 pt-2  font-semibold leading-tight text-sm'>{productData.name}</p>

    <div className='relative flex items-center justify-between px-2 pt-1 leading-tight'>
      <div>
        <Rating avg={4.5} />
        <div className='flex items-center text-red-600 font-semibold'>600000 đ
          <p className='ml-2 px-2 py-1 bg-red-600 rounded-md text-white text-xs'>
            -{Math.round(100 / (770000 / 600000))}%
          </p>
        </div>
        <p className='line-through text-sm text-gray-500 -top-2'>770000 đ</p>
      </div>
    </div>
  );
};

export default ProductThumb;
