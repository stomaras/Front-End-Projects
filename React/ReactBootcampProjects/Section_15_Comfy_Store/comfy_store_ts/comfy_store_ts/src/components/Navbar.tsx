import React, { useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import {BsCart3, BsMoonFill, BsSunFill} from "react-icons/bs";
import NavLinks  from './NavLinks';
import {HiMoon} from "react-icons/hi";
import {FaSun} from "react-icons/fa";

interface ThemeTogglerProps {
    themeToggler: () => void;
}

const Navbar = ({themeToggler}:ThemeTogglerProps) => {

    const [theme, setTheme] = useState(false);

    const handleTheme = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(theme);
        setTheme(!theme);
    }

  return (
    <nav className='bg-base-200'>
        <div className='navbar align-element'>
            <div className="navbar-start">
                {/*Title*/}
                <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center'>
                    C
                </NavLink>
                {/*DROPDONW*/}
                <div className='dropdown'>
                    <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                    </label>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200'>

                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className='menu menu-horizontal'>
                    <NavLinks/>
                </ul>
            </div>
            <div className="navbar-end">
                {/*Theme Set Up*/}
                <label htmlFor="" className='swap swap-rotate'>
                    <button id='checkbox' onClick={themeToggler} onChange={() => false} >
                    {window.localStorage.getItem('theme') !== 'light' ? (
                        <>
                            <HiMoon/>
                        </>
                    ):(
                        <>
                            <FaSun/>
                        </>
                    )}
                    </button>
                    
                </label>
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