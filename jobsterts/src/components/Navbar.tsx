import React from 'react'
import Wrapper from "../assets/wrappers/Navbar";
import {FaAlignLeft, FaUserCircle, FaCaretDown} from "react-icons/fa";
import Logo  from './Logo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../features/store';
import { userSelector } from '../features/user/userSlice';
import { useAppSelector } from '../features/hooks';
import { toggleSidebar, logoutUser } from '../features/user/userSlice';


const Navbar = () => {

    const [showLogo, setShowLogo] = useState(false);
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
                    onClick={() => setShowLogo(!showLogo)}
                >
                    <FaUserCircle/>
                    {user?.name}
                    <FaCaretDown/>
                </button>
                <div className={showLogo ? 'dropdown show-dropdown' : 'dropdown'}>
                    <button
                        type='button'
                        className='dropdown-btn'
                        onClick={() => {
                            dispatch(logoutUser())
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