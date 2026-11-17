import React from 'react'
import SidebarLink from '../components/SidebarLink'

import Image from '../components/Image'
import Icon from '../assets/icon-01.png'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';

import { IoMdCloudUpload } from "react-icons/io";



const Sidebar = () => {

  const location = useLocation()
  const active = location.pathname.split("/").pop()
  console.log(active)


  return (
    <div className='w-full h-screen bg-heading rounded-r-3xl flex flex-col justify-around items-center'>
      <div className='relative w-30 h-30 bg-transparent group'>
        <Image className='rounded-full' src={Icon} />
        <div className='flex justify-center items-center absolute top-0 left-0 bg-transparent w-full h-full rounded-full group-hover:bg-white/30'><IoMdCloudUpload className='text-4xl text-transparent group-hover:text-heading' />
        </div>
      </div>
      <div className='flex flex-col items-center gap-y-5'>

        {/* after:inset-0 is a cleaner alternative to writing after:w-full after:h-full after:top-1/2 after:-translate-y-1/2 after:left-0. */}

        <SidebarLink active={active} name="home" to="/dashboard/home" icon={IoHomeOutline} />
        <SidebarLink active={active} name="message" to="/dashboard/message" icon={AiOutlineMessage} />
        <SidebarLink active={active} name="notification" to="/dashboard/notification" icon={IoNotificationsOutline} />
        <SidebarLink active={active} name="settings" to="/dashboard/settings" icon={IoSettingsOutline} />

      </div>
      <TbLogout className='text-6xl text-mute mt-40' />
    </div>
  )
}

export default Sidebar


