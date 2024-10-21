import React from 'react';
import user from "../Assets/user.png"
import { MdOutlineCall } from "react-icons/md";

function NavBar2() {
  return (
    <div className="bg-white shadow-sm py-4 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <p className="text-green-600 font-bold text-xl leading-3">Better<br />
          <span className=" text-gray-600 text-lg font-thin">Mortgage</span>
          </p>
        </div>

        {/* Middle: Avatar */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img 
            src={user} 
            alt="Betsy Avatar" 
            className="rounded-full w-12 h-12 object-cover"
          />
        </div>

        {/* Right: Contact Info */}
        <div className="flex items-center space-x-2">
          <MdOutlineCall size={25} className='mr-1 text-green-900 bg-green-200 rounded-full px-1 py-1'/>
          <p className="text-gray-700 font-medium">Need help? Call (415) 523 8837</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar2;