import React from 'react'
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to='/' className='navbar__link'>Home</Link>
        <Link to='/about' className='navbar__link'>About</Link>
    </nav>
  )
}
