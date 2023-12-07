import React from 'react'
import {BsCart3, BsFacebook, BsMoonFill, BsSunFill} from "react-icons/bs";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='bg-base-200'>
        <div className="navbar align-element">
            <div className="navbar-start">
                {/* TITLE */}
                <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center'>
                    C
                </NavLink>
                {/*DROPDOWN*/}
                <div className="dropdown">
                    <label htmlFor={0} className='btn btn-ghost lg:hidden'>
                        <BsFacebook/>                    
                    </label>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200'>
                        nav links
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className='menu menu-horizontal'>
                    nav links
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
                    <div className="indicator">
                        <BsCart3 className='h-6 w-6'/>
                        <span className='badge badge-sm badge-primary indicator-item'>
                            8
                        </span>
                    </div>
                </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar