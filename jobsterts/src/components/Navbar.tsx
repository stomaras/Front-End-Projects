import React from 'react'
import Wrapper from "../assets/wrappers/Navbar";
import {FaAlignLeft, FaUserCircle, FaCaretDown} from "react-icons/fa";
import Logo  from './Logo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../features/store';
import { userSelector } from '../features/user/userSlice';
import { useAppSelector } from '../features/hooks';
import { toggleSidebar } from '../features/user/userSlice';


const Navbar = () => {

    const dispatch = useDispatch();
    const {user} = useAppSelector(userSelector)

    const toggle = () => {
        dispatch(toggleSidebar());
    }

  return (
    <Wrapper>
        <div className="nav-center">
            <button type='button' className='toggle-btn' onClick={toggle}>  
                <FaAlignLeft/>
            </button>
            <div>
                <Logo/>
                <h3 className="logo-text">dashboard</h3>
            </div>
            <div className="btn-container">
                <button
                    type='button'
                    className='btn'
                    onClick={() => console.log('toggle logout dropdown')}
                >
                    <FaUserCircle/>
                    {user?.name}
                    <FaCaretDown/>
                </button>
                <div className='dropdown show-dropdown'>
                    <button
                        type='button'
                        className='dropdown-btn'
                        onClick={() => {
                            console.log('logout user')
                        }}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Navbar