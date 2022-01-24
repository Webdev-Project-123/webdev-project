import React, { useState } from "react";
import "./Styles/customProductThumb.css";
import Rating from "./Rating";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "../GloblalContext/CartContext";

const ProductThumb = ({ productData }) => {

  // const rating = (ratings) => {
  //   let length =
  //     ratings.one + ratings.two + ratings.three + ratings.four + ratings.five;
  //   let sum =
  //     ratings.one +
  //     ratings.two * 2 +
  //     ratings.three * 3 +
  //     ratings.four * 4 +
  //     ratings.five * 5;
  //   return sum / length;
  // };

  const sample = {
    one: 2,
    two: 2,
    three: 5,
    four: 9,
    five: 20,
  };

  const [, setCart] = useContext(CartContext);
  const addToCart = (productID) => {
    let currCart = JSON.parse(localStorage.getItem('cart')) || [];
    currCart.push(productID);
    localStorage.setItem('cart', JSON.stringify(currCart));
    setCart(currCart);
  }

  return <div className='m-2 sm:m-7 md:m-3 lg:m-5 bg-gray-50 rounded-lg transition duration-300 hover:cursor-pointer 
  hover:shadow-tuanProductThumb p-2 sm:my-4 aspect-[0.75]'>
    <div className='h-[75%]'>
      <img src={productData.image} className='m-auto rounded-lg object-fill h-full' />
    </div>

    <p className='title h-[44px] p-2 pt-2 font-semibold leading-tight text-sm'>{productData.title}</p>

    <div className='relative flex items-center justify-between px-2 pt-1 leading-tight'>
      <div>
        {/* Rating */}
        <Rating avg={productData.rating ? productData.rating.rate : 5} />

        {/* Info */}
        <div className='flex items-center text-red-600 text-xs sm:text-base font-semibold'>{Math.round(productData.price)} đ
          <p className='ml-2 px-1 py-0 sm:px-2 sm:py-1 bg-red-600 rounded-md text-white text-xs'>
            -{Math.round(100 - 100 / ((productData.price + 10) / productData.price))}%
          </p>
        </div>
        <p className='line-through text-xs sm:text-base text-gray-500 -top-2'>{productData.price + 10} đ</p>
      </div>

      {/* Add to Cart */}
      <button onClick={() => addToCart(productData.title)} className='absolute bottom-1 right-1 transition duration-300 hover:bg-[#FEA82F] rounded-full p-2'>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
          strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>
    </div>
  </div>
};

export default ProductThumb;
