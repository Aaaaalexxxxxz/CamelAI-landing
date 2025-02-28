"use client"
import { useState } from 'react';
import { Dropdown } from "./navbardropdown"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-gray-800 bg-opacity-50 w-full p-4 fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-lg backdrop-blur-md max-w-[97%] px-6 pt-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-white text-2xl font-bold">
          MyLogo
        </a>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300 relative overflow-hidden group transform transition-transform duration-300 hover:translate-y-[-2px] font-bold">
            Blogs
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#" className="text-white hover:text-gray-300 relative overflow-hidden group transform transition-transform duration-300 hover:translate-y-[-2px] font-bold">
            Pricing
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#" className="text-white hover:text-gray-300 relative overflow-hidden group transform transition-transform duration-300 hover:translate-y-[-2px] font-bold">
            Login
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white hover:text-gray-300 transition duration-300" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 p-4 space-y-4 rounded-md md:hidden flex flex-col">
            <a href="#" className="text-center text-white hover:text-gray-300 relative overflow-hidden group transform transition-transform duration-300 hover:translate-y-[-2px] font-bold">
            Blogs
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#" className="text-center text-white hover:text-gray-300 relative overflow-hidden group transform transition-transform duration-300 hover:translate-y-[-2px] font-bold">
            Pricing
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a href="#" className="text-center text-white hover:text-gray-300 relative overflow-hidden group transform transition-transform duration-300 hover:translate-y-[-2px] font-bold">
            Login
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </div>
      )}
    </nav>
  );
};

