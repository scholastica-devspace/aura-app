import React from 'react'
import { HiDotsVertical } from "react-icons/hi";


const GroupTitle = ({title}) => {
    return (
        <div className='flex justify-between items-center'>
            <h2 className='font-poppins font-bold text-lg text-heading capitalize'>{title}</h2>
            <HiDotsVertical className='text-xl text-olive' />
        </div>
    )
}

export default GroupTitle