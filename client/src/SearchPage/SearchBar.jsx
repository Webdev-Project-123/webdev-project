import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from './SearchContext';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/search/${searchValue}`);
  }

  return <form className="border-2 flex rounded-md items-center" onSubmit={handleSubmit}>
    <input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onSubmit={handleSubmit}
      className="outline-0 text-sm text-white bg-inherit placeholder:text-white w-full p-2 mx-2  "
      placeholder="Search books..."
    />
    <button type='submit'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
  </form>
};

export default SearchBar;
