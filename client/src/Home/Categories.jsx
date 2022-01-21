import React from 'react';

const categories = ['Hành động', 'Bi kịch', 'Hài hước', 'Học đường', 'Trinh thám', 'Self help', 'Lãng mạn', 'Sách giáo khoa', 'Kinh dị', 'Phiêu lưu', '>'];

const Categories = () => {
  return <div className='gap-1 py-2 flex justify-center items-center w-full bg-white rounded-xl cursor-pointer'>
    {categories.map((category, index) => {
      return <div key={index} className='rounded-lg cursor-pointer px-6 py-2 hover:bg-[#FFC288] transition duration-300' style={category === '>' ? { 'font-weight': '800' } : {}} >
        {category}
      </div>
    })}
  </div >
};

export default Categories;