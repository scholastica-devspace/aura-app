import React from 'react'
import { Link } from 'react-router-dom'

const SidebarLink = ({active, name, to, icon : Icon}) => {
    return (
        
        <Link className={`relative after:absolute after:content[""]
        after:inset-0 after:-z-40 after:rounded-l-lg z-30 py-3 px-26
        ${active == name && "after:bg-olive after:border-r-8 after:border-white"}`} to={to}>
        <Icon className={`text-6xl ${active == name ? "text-white" : "text-mute"}`} />
        </Link>

    )
}

export default SidebarLink


