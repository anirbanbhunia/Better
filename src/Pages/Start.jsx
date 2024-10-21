import React from 'react';
import { TbHomeDollar } from "react-icons/tb";
import { RiExchangeDollarLine } from "react-icons/ri";
import { ImCoinDollar } from "react-icons/im";
import { CiPercent } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { FaMobileScreenButton } from "react-icons/fa6";
import NavBar2 from '../Components/NavBar2';
import Footer from '../Components/Footer';

function Start() {
  return (
    <div>
        <NavBar2/>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="text-center mb-8 mt-10">
        <h1 className="text-6xl mb-4">Hi, I'm Betsy!</h1>
        <p className="text-6xl">What can I help you with?</p>
      </div>

      <div className="space-y-4">
        <button className="w-[600px] py-3 bg-white text-black font-medium shadow-sm rounded-lg border border-gray-200 flex items-center justify-start pl-6 text-lg hover:border-4 hover:border-green-800 hover:text-green-800 transition-all ease-in-out duration-200">
          <span className="mr-4"><TbHomeDollar className='text-green-800' size={35}/></span> Buying a home
        </button>
        <button className="w-[600px] py-3 bg-white text-black font-medium shadow-sm rounded-lg border border-gray-200 flex items-center justify-start pl-6 text-lg hover:border-4 hover:border-green-800 hover:text-green-800 transition-all ease-in-out duration-200">
          <span className="mr-4"><RiExchangeDollarLine className='text-green-800' size={35}/></span> Refinance my mortgage
        </button>
        <button className="w-[600px] py-3 bg-white text-black font-medium shadow-sm rounded-lg border border-gray-200 flex items-center justify-start pl-6 text-lg hover:border-4 hover:border-green-800 hover:text-green-800 transition-all ease-in-out duration-200">
          <span className="mr-4"><ImCoinDollar className='text-green-800' size={35}/></span> Get cash from my home
        </button>
      </div>

      <div className="mt-16 text-center flex gap-8">
        <div>
            <div className="text-2xl font-semibold">$100B</div>
            <p className="text-gray-600">home loans funded entirely online</p>
        </div>
        <div>
            <div className="text-2xl font-semibold">400K</div>
            <p className="text-gray-600">Customers who chose a Better Mortgage</p>
        </div>
      </div>

        <div className='bg-green-100 mt-12 flex justify-center w-[600px] h-[230px] rounded-lg mb-36'>
            <div className="text-sm mt-12 flex flex-col text-green-900 gap-2">
                <span className='text-center text-lg font-light'>After a few questions, you'll unlock:</span>
                <span className='flex items-center font-light text-lg ml-6'> <CiPercent className='mr-3' size={25}/> Custom mortgage rates</span>
                <span className='flex items-center font-light text-lg ml-6'><HiOutlineCurrencyDollar className='mr-3' size={25}/>Exclusive offers</span>
                <span className='flex items-center font-light text-lg ml-6'><FaMobileScreenButton className='mr-3'size={25}/>A personalized dashboard</span>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Start;