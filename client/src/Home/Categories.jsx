import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const categories = ['Romance', 'Fantasy', 'Horror', 'Manga', 'Art', 'History', 'Business'];

const Categories = () => {
  const getClassName = (i) => {
    if (i > 5)
      return 'category font-semibold text-center lg:block hidden';
    if (i > 3)
      return 'category font-semibold text-center md:block hidden';
    if (i > 2)
      return 'category font-semibold text-center sm:block hidden';
    return 'category font-semibold text-center';
  }

  return <div className='p-2 flex justify-center bg-white rounded-xl cursor-pointer'>
    {categories.map((category, index) => {
      return <Link
        to={`/categories/${category.toLowerCase()}`}
      ><div key={index}
        className={getClassName(index)}>
          {category}
        </div>
      </Link>
    })}
    <Link
      to='/categories'>
      <div className='category font-bold text-center'>More
      </div>
    </Link>
  </div >
};

export default Categories;