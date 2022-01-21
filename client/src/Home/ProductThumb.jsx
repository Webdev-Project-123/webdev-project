import React, { useState } from 'react';
import './Styles/customProductThumb.css';

const ProductThumb = ({ productData }) => {
  const rating = (ratings) => {
    sum = ratings.reduce(((curr, a) => curr + a), 0);
    return sum / ratings.length;
  }

  return <div className='flex-1 rounded-lg hover:cursor-pointer hover:shadow-tuanProductThumb py-2 px-4 m-4 min-w-[200px] h-[300px]'>
    <div className='w-full h-[70%]'>
      <img src={productData.image} className='m-auto rounded-lg object-cover h-[100%]' />
    </div>

    <p className='title h-[15%] p-2 font-semibold leading-tight text-sm'>{productData.name}</p>

    <button className='relative top-0 right-0 z-10 hover:bg-[#FFC288] rounded-full p-2'>
      <svg className="w-6 h-6 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
        strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </button>
  </div>;
};

export default ProductThumb;
