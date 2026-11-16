import React from 'react'
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

const SerachBar = () => {
    return (
        <div className='flex items-center w-[95%] mx-auto rounded-xl py-1 my-7 px-4
          shadow-[0px_4px_8px_0px_rgba(0,0,0,0.3)]'>
            <FaSearch className='text-xl text-olive' />
            <input className='w-full text-lg py-1 px-5 outline-none' type="text" placeholder='Search' />
            <HiDotsVertical className='text-xl text-olive' />
        </div>
    )
}

export default SerachBar