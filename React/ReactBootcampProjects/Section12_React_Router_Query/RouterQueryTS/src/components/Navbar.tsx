import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
        <div className="nav-center">
            <span className='logo'>MixMaster</span>
            
                <Link to='/' className='nav-link'>
                    Home
                </Link>
                <Link to='/about' className='nav-link'>
                    About
                </Link>
                <Link to='/newsletter' className='nav-link'>
                    Newsletter
                </Link>
            
        </div>
    </Wrapper>
  )
}

export default Navbar