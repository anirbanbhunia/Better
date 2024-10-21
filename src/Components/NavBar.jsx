import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoMdCall } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent text-white fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 gap-8">
          <span className="text-2xl font-bold text-black">Better</span>
        

        {/* Menu for large screens */}
            <ul className="hidden md:flex space-x-6">
            
                <li className="group relative">
                <Link to={"/"} className="hover:bg-white text-black rounded-full px-3 py-4">{"Home"}</Link>
                {/* Dropdown */}
                {/* <ul className="absolute left-0 mt-6 hidden group-hover:block bg-white text-gray-800 shadow-lg py-2 rounded w-60">
                    <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Sub Item 1</a></li>
                    <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Sub Item 2</a></li>
                    <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Sub Item 3</a></li>
                </ul> */}
                </li>
                <li className="group relative">
                <Link to={"/aboutus"} className="hover:bg-white text-black rounded-full px-3 py-4">{"About us"}</Link>
                </li>
                <li className="group relative">
                <Link to={"/mortgage"} className="hover:bg-white text-black rounded-full px-3 py-4">{"Mortgage calculator"}</Link>
                </li>
                <li className="group relative">
                <Link to={"/start"} className="hover:bg-white text-black rounded-full px-3 py-4">{"Start"}</Link>
                </li>
            </ul>
        </div>

        {/* Right side - 1 item + 2 buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:bg-white hover:text-green-900 p-2 rounded-full"><IoMdCall className=' text-2xl text-black'/></a>
          <button className="px-4 py-2 bg-transparent rounded-full hover:bg-gray-400 text-black">Sign in</button>
          <button className="px-4 py-2 bg-green-400 rounded-full hover:bg-green-900 font-semibold text-black">Get started</button>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden flex items-center gap-6">
            <ul className="space-y-4">
                <li key="contact" className="relative group">
                    <a href="#" className="hover:text-green-900">
                                <IoMdCall className="text-2xl" />
                    </a>
                </li>
            </ul>
            <button className='bg-green-400 text-green-950 font-semibold px-2 py-1 rounded-3xl'>Get Started</button>
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? "" :
            <div className='flex gap-6'>
                <FaBars size={24} />
            </div> }
          </button>
        </div>
      </div>

      {/* Mobile Menu (Sliding sidebar) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white text-black transition-transform transform ${
  isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
         <div className='flex items-center justify-between'>
            <span className="text-3xl font-bold">Better</span>
            <button onClick={handleMenuToggle} className="mb-4">
                <FaTimes size={24} />
            </button>
         </div>
          <ul className="space-y-4">
    
              <li className="relative group">
                <Link to={"/"} className="hover:text-gray-400">{"Home"}</Link>
                {/* Dropdown for mobile */}
                {/* <ul className="mt-2 hidden group-hover:block bg-white text-black py-2 rounded">
                  <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Sub Item 1</a></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Sub Item 2</a></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Sub Item 3</a></li>
                </ul> */}
              </li>
              <li className="relative group">
                <Link to={"/aboutus"} className="hover:text-gray-400">{"About us"}</Link>
              </li>
              <li className="relative group">
                <Link to={"/mortgage"} className="hover:text-gray-400">{"Mortgage calculator"}</Link>
              </li>
              <li className="relative group">
                <Link to={"/start"} className="hover:text-gray-400">{"Start"}</Link>
              </li>
            
          </ul>
          <div className=' mt-4'>
            <button className='flex bg-gray-100 border rounded-3xl w-full justify-center py-1 gap-2'>
                <IoMdCall size={30} />
                <span>Call us anytime at <span className='underline'>(415)52388371</span></span>
            </button>
            <div className='mt-40'>
                <button className='flex flex-col bg-green-400 border rounded-full w-full items-center py-1'>
                    <p className='font-semibold text-lg'>Get Started</p>
                    <span className=' font-light text-sm'>3 min | No credit impact</span>
                </button>
                <button className='flex bg-white border border-gray-300 rounded-full w-full justify-center items-center gap-2 text-lg font-light mt-6 py-3'>Sign in <FaUser size={13}/></button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;