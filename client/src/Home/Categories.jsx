import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const categories = ['Romance', 'Fantasy', 'Horror', 'Manga', 'Art', 'History', 'Business', 'Cooking'];

const Categories = () => {
  return <div className='p-2 hidden xl:flex xl:justify-center bg-white rounded-xl cursor-pointer'>
    {categories.map((category, index) => {
      return <Link
        to={`/categories/${category.toLowerCase()}`}
      ><div key={index}
        className='category font-semibold text-center'>
          {category}
        </div>
      </Link>
    })}
    <Link
      to='/categories'>
      <div className='category font-bold text-center'>View more {`>`}
      </div>
    </Link>
  </div >
};

export default Categories;