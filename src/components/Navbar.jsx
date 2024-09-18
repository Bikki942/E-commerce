import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const cartItems = useSelector((state) => state.cart.carts[currentUser?.email]?.items || []);
  const navigate = useNavigate();

  const hasItemsInCart = cartItems.length > 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-full flex flex-col md:flex-row justify-between items-center bg-gray-100 shadow-lg p-4 sticky top-0 z-50'>
      <div className='flex items-center justify-between w-full md:w-auto'>
        <div className='flex items-center text-3xl font-bold text-orange-600 cursor-pointer transition-transform transform hover:scale-105' onClick={() => navigate('/')}>
          <img className='w-16 h-16 rounded-full' src="src/image/images_processed.jpeg" alt="ShopingMart Logo" />
          <span className='ml-2'>Shoping<span className='text-red-600'>Mart</span></span>
        </div>
        {/* Hamburger Icon */}
        <button 
          className='md:hidden flex items-center p-2 text-gray-600 hover:text-gray-800'
          onClick={toggleMenu}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:flex md:items-center md:space-x-8 mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8'>
          <li className='text-xl font-semibold text-gray-700 cursor-pointer transition-colors hover:text-red-600'>
            <Link to="/">Home</Link>
          </li>
          <li className='text-xl font-semibold text-gray-700 cursor-pointer transition-colors hover:text-red-600'>
            <Link to="/about">About</Link>
          </li>
          <li className='text-xl font-semibold text-gray-700 cursor-pointer transition-colors hover:text-red-600'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0'>
          {isLoggedIn ? (
            <>
              <div className='relative cursor-pointer'>
                <Link to="/AddToCart">
                  <img src="src/image/icons8-cart-30.png" className='w-8 h-8' alt="Cart" />
                  {hasItemsInCart && <span className='absolute top-0 right-0 bg-red-600 text-white rounded-full px-2 py-1 text-xs'>{cartItems.length}</span>}
                </Link>
              </div>
              <div className='relative cursor-pointer'>
                <Link to="/profile">
                  <img src="src/image/download.png" className='w-8 h-8 rounded-full border border-gray-300' alt="Profile" />
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors'>
                <Link to="/signup">Sign Up</Link>
              </div>
              <div className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors'>
                <Link to="/login">Log In</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
