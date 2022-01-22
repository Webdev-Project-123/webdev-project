import React from 'react';
import '../index.css';

const categories = ['Romance', 'Fantasy', 'Horror', 'Manga', 'Sci-fi', 'Mystery', 'Art', 'History', 'Business', 'Cooking'];

const Categories = () => {
  return <div className='gap-3 py-2 flex justify-center items-center w-full bg-white rounded-xl cursor-pointer'>
    {categories.map((category, index) => {
      return <div key={index}
        className='category font-semibold'>
        {category}
      </div>
    })}
    <div className='category font-bold'>View more {`>`}
    </div>
  </div >
};

export default Categories;