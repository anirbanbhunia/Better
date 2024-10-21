import React from 'react'
import { IoMdArrowForward } from "react-icons/io";

function SmallCard({img,heading,para}) {
  return (
    <div>
        <div className="card card-compact bg-gray-200 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{heading}</h2>
                <p>{para}</p>
                <div className="card-actions justify-start">
                <button className=" border border-gray-400 rounded-full p-2 hover:bg-green-600 hover:text-white">
                    <IoMdArrowForward className='text-3xl' />
                </button>
                </div>
                <figure>
                    <img
                    src={img}
                    alt="Shoes"
                    className='rounded-lg h-[200px]' />
                </figure>
            </div>
        </div>
    </div>
  )
}

export default SmallCard