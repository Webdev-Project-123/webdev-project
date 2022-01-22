import React from 'react';
import Rating from '../Home/Rating';
import '../index.css';

const categories = ['Romance', 'Fantasy', 'Horror', 'Manga', 'Sci-fi', 'Mystery', 'Art',
  'History', 'Business', 'Cooking', 'Novel', 'Comic', 'Poetry', 'Thriller', 'Travel', 'Biography',
  'Photography', 'Investing', 'Science & Technology', 'Self help'];

const Filter = () => {

  return <div className='ml-16 w-[240px] cursor-pointer bg-white rounded-lg h-fit'>
    <div className='py-2 font-extrabold text-center text-xl bg-[#FEA82F] rounded-t-lg'>CATEGORY</div>

    {categories.map((category, index) => {
      if (index === categories.length - 1)
        return <div key={index} className='filter rounded-b-lg'>
          {category}
        </div>
      return <div key={index} className='filter'>
        {category}
      </div>
    }
    )}
  </div>;
};

export default Filter;
