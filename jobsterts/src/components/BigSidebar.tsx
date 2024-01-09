import React from 'react'
import Wrapper from "../assets/wrappers/BigSidebar";
import links from '../utils/links';
import { useAppSelector } from '../features/hooks';
import { loginUser, registerUser, toggleSidebar, userSelector } from '../features/user/userSlice';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { useDispatch } from 'react-redux';


const BigSidebar = () => {
    const {isSidebarOpen} = useAppSelector(userSelector);
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleSidebar());
    }
  return (
    <Wrapper>
        <div
            className={
                isSidebarOpen
                ? 'sidebar-container'
                : 'sidebar-container show-sidebar'
            }
        >
            <div className='content'>
                <header>
                    <Logo/>
                </header>
                <NavLinks toggleSidebar={toggle}/>
            </div>
        </div>
    </Wrapper>
  )
}

export default BigSidebar