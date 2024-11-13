import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarItem({Icon, title, path, extraStyle}) {
    return (
        <NavLink className={`text-white opacity-[0.6] flex items-center space-x-5 ${extraStyle}`} to={path}>
        {Icon}
        <strong className='font-bold text-[18px] '>{title}</strong>
        </NavLink>
    )
}

export default NavbarItem