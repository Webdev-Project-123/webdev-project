import React from 'react';
import '../index.css';

const GroupThumb = ({ groupData }) => {
  let img_url;
  if (groupData == 'Fiction')
    img_url = "url('./src/Home/Images/groups_background_2.jpg')";
  else if (groupData == 'Nonfiction')
    img_url = "url('./src/Home/Images/groups_background_1.jpg')";
  else
    img_url = "url('./src/Home/Images/groups_background_3.jpg')";

  return <div
    className='card-zoom bg-no-repeat bg-center cursor-pointer rounded-xl bg-cover bg-white w-full h-[40vh] text-center flex items-center justify-center'
    style={{ backgroundImage: img_url }}
  >
    <p className='text-lg bg-opacity-90 rounded-xl mx-4 py-2 font-extrabold bg-white w-full'>
      {groupData}
    </p>
  </div>;
};

export default GroupThumb;
