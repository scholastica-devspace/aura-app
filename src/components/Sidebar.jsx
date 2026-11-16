import React from 'react'

import Image from '../components/Image'
import Icon from '../assets/icon-01.png'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";


const Sidebar = () => {
  return (
    <div className='w-full h-screen bg-heading rounded-r-3xl flex flex-col justify-around items-center'>
        <div className='w-25 h-25 bg-transparent rounded-full'>
            <Image src={Icon}/>
        </div>
        <div className='flex flex-col items-center gap-y-12'>
            <IoHomeOutline className='text-6xl text-white' />
            <AiOutlineMessage className='text-6xl text-white' />
            <IoNotificationsOutline className='text-6xl text-white' />
            <IoSettingsOutline className='text-6xl text-white' />
        </div>
        <TbLogout className='text-6xl text-white mt-30' />
    </div>
  )
}

export default Sidebar


