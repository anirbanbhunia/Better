import React from 'react'
import { IoMdArrowForward } from "react-icons/io";

function BigCard({img,heading,para}) {
  return (
    <div className='w-[100%]'>
        <div className="card bg-gray-200 w-[900px] shadow-xl">
            <div className='flex'>
                <div className="items-start text-start mt-12 ml-12 flex flex-col gap-5">
                    <h2 className="card-title">{heading}</h2>
                    <p>{para}</p>
                    <div className="card-actions">
                        <button className=" border border-gray-400 rounded-full p-2 hover:bg-green-600 hover:text-white">
                            <IoMdArrowForward className='text-3xl' />
                        </button>
                    </div>
                </div>
                <figure className="px-10 py-10">
                    <img
                    src={img}
                    alt="Shoes"
                    className="rounded-lg h-64" />
                </figure>
            </div>
        </div>
    </div>
  )
}

export default BigCard