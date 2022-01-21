import React from 'react';

const categories = ['Hành động', 'Bi kịch', 'Hài hước', 'Học đường', 'Trinh thám', 'Self help', 'Lãng mạn', 'Sách giáo khoa', 'ABC'];

const Categories = () => {
  return <div className='w-full bg-white rounded-xl '>
    <h1 className='rounded-t-xl bg-[#FEA82F] py-2 text-white font-bold text-center text-xl'>DANH MỤC THỂ LOẠI</h1>
    {categories.map((category, index) => {
      return <div key={index} className='cursor-pointer px-6 py-2 hover:bg-[#FFC288] ' >
        {category}
      </div>
    })}
  </div>
};

export default Categories;