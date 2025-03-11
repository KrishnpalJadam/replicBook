import React, { useState } from 'react';
import logo from "../assets/logo.jpg"
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 md:px-8 py-4 bg-black z-50 container">
        <div className='flex items-center gap-3'>
          <Link to="/hero">
          
         
          <img
            src={logo}
            alt="Smart Life Academy Logo"
            className="h-[60px] w-[60px] md:h-[90px] md:w-[90px] object-contain rounded-lg"
          />
           </Link>
          <div className='header-text'>
            <h1 className="text-[20px] md:text-[30px] font-extrabold text-yellow-300">Smart Life Academy</h1>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <Link to="/login">
            <button className="px-6 md:px-8 py-2 bg-[#1a1a1a] text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 md:px-8 py-2 bg-yellow-300 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-full left-0 right-0 flex-col gap-4 bg-black p-4 border-t border-gray-800`}>
          <Link to="/signup" className="w-full">
            <button className="w-full px-6 py-2 bg-[#1a1a1a] text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Login
            </button>
          </Link>
          <Link to="/signup" className="w-full">
            <button className="w-full px-6 py-2 bg-yellow-300 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors">
              Sign Up
            </button>
          </Link>
        </div>
      </header>
      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-[80px] md:h-[108px]"></div>
    </>
  );
};

export default Header;