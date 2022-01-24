import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';

const DropDownList = ({ categories, isClicked }) => {
  return (
    <div className={isClicked ? 'items-center bg-white rounded-b-lg mr-2 sm:mr-16' : 'hidden'}
    >
      {categories.map((category, index) => {
        return <Link key={index} className='filter block'
          to={`/categories/${category.toLowerCase()}`}
        > {category}</Link>
      })}
    </div >
  )
}

export default DropDownList
