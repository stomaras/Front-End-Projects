import React from 'react'
import {NavLink} from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to='/' className='navbar__link'>Home</NavLink>
        <NavLink to='/about' className='navbar__link'>About</NavLink>
    </nav>
  )
}
