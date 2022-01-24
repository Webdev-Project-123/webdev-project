import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import '../index.css';
import DropDownList from './DropDownList';

const categories = ['Romance', 'Fantasy', 'Horror', 'Manga', 'Sci-fi', 'Mystery', 'Art',
  'History', 'Business', 'Cooking', 'Novel', 'Comic', 'Poetry', 'Thriller', 'Travel', 'Biography',
  'Photography', 'Investing', 'Science & Technology', 'Self help'];

const Filter = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggle = () => {
    setIsClicked(!isClicked);
  }

  return <div className='min-w-[200px] ml-2 sm:ml-16 '>
    <div
      onClick={toggle}
      className='md:hidden block text-xl font-extrabold bg-[#FEA82F] mr-2 sm:mr-16 rounded-lg p-2 cursor-pointer'>
      <h1 className='flex items-center justify-between'>
        CATEGORY
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      </h1>
    </div>

    {/* Drop down list */}
    <div className='md:hidden block'>
      <DropDownList categories={categories} isClicked={isClicked} />
    </div>

    <div className={'md:block hidden w-full cursor-pointer bg-white rounded-lg h-fit'}>
      <div className='py-2 font-extrabold text-center text-xl bg-[#FEA82F] rounded-t-lg'>CATEGORY</div>
      <nav>
        {categories.map((category, index) => {
          if (index === categories.length - 1)
            return <Link
              to={`/categories/${category.toLowerCase()}`}>
              <ul key={index} className='filter rounded-b-lg'>
                {category}
              </ul>
            </Link>
          return <Link
            to={`/categories/${category.toLowerCase()}`}>
            <ul key={index} className='filter'>
              {category}
            </ul>
          </Link>
        }
        )}
      </nav>
    </div>
  </div>;
};

export default Filter;
