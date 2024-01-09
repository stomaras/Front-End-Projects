import React from 'react'
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { useAppSelector } from '../features/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar, userSelector } from '../features/user/userSlice';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const SmallSidebar = () => {
    const {isSidebarOpen} = useAppSelector(userSelector);
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleSidebar());
    }
  return (
    <Wrapper>
        <div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
            <div className="content">
                <button className='close-btn' onClick={() => {toggle}}>
                    <FaTimes/>
                </button>
                <header>
                    <Logo/>
                </header>
                <NavLinks toggleSidebar={toggle}/>
                {/* <div className="nav-links">
                    {links.map((link) => {
                        const {text, path, id, icon} = link;
                        return (
                            <NavLink
                                to={path}
                                className={({isActive}) => 
                                    isActive ? 'nav-link active':'nav-link'
                                }
                                key={id}
                                onClick={toggle}
                            >
                                <span className='icon'>{icon}</span>
                                {text}
                            </NavLink>
                        )
                    })}
                </div> */}
            </div>
        </div>
    </Wrapper>
  )
}

export default SmallSidebar