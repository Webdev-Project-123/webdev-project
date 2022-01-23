import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchPage/SearchBar";
import { SearchContext } from "../SearchPage/SearchContext";

const userIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>;

const loginIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
</svg>

const cartBadge = (itemsAmount) => {
  if (!itemsAmount)
    return;

  return <span className='absolute w-6 leading-6 rounded-full text-xs -top-3 -right-3 bg-white text-orange-500'>
    {itemsAmount < 10 ? itemsAmount : '9+'}
  </span>
}

export const Logo = () => {
  const [, setSearchValue] = useContext(SearchContext);

  return (
    <Link
      to='/'
      onClick={() => setSearchValue('')}
      className="text-2xl font-bold sm:text-3xl flex items-center flex-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 mr-2" fill="white" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
      WORDY
    </Link>
  )
};


const Header = ({ isLogin }) => {

  const [itemsAmount, setItemsAmount] = useState(0);
  const addToCart = () => {
    setItemsAmount((c) => c + 1);
  };

  return <div className="shadow-md font-sans flex px-2 sm:px-16 items-center bg-[#FF6701] h-14 font-bold text-white space-x-2" >
    {/* BRAND NAME */}
    <Logo />

    {/* SEARCH BAR */}
    <div className="flex-1">
      <SearchBar />
    </div>

    {/* CART AND LOGIN/ACCOUNT ICONS*/}
    <nav className="flex-1">
      <div className="flex items-center justify-end gap-3 sm:gap-8">
        <button
          className="relative"
        >
          {cartBadge(itemsAmount)}
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
            strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>

        {/* Login/Account */}
        <button>
          {isLogin ? userIcon : loginIcon}
        </button>
      </div>
    </nav>
  </div >;
};

export default Header;