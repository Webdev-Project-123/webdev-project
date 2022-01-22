import React, { useState } from 'react';
import '../index.css';

const PaginationBar = ({ productsPerPage, numOfProducts, paginate, currPage }) => {
  const pageNumbers = [];
  let currPageList = [];

  for (let i = 1; i <= Math.ceil(numOfProducts / productsPerPage); i++)
    pageNumbers.push(i);

  if (pageNumbers.length > 5) {
    if (currPage > 3 && currPage < pageNumbers.length - 1)
      currPageList = pageNumbers.slice(currPage - 3, currPage + 2);
    else if (currPage <= 3)
      currPageList = pageNumbers.slice(0, 5);
    else
      currPageList = pageNumbers.slice(pageNumbers.length - 5, pageNumbers.length)
  }
  else
    currPageList = pageNumbers.slice(0, pageNumbers.length);

  const changeCurrPage = (page, value) => {
    if (page === 1 && value === -1)
      return;
    if (page === pageNumbers.length && value === 1)
      return;
    paginate(page + value);
  }

  return <nav className='rounded-md mt-2 flex justify-center'>
    <ul className='flex justify-center w-fit bg-white rounded-lg'>
      <li className='page-number flex items-center' onClick={() => changeCurrPage(currPage, -1)} >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
        </svg>
      </li>
      {currPageList.map((page, index) =>
        <li key={index} onClick={() => paginate(page)} className={page === currPage ? 'selected-page-number' : 'page-number'}>
          {page}
        </li>
      )}
      <li className='page-number flex items-center' onClick={() => changeCurrPage(currPage, 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
        </svg>
      </li>
    </ul>
  </nav>
};

export default PaginationBar;
