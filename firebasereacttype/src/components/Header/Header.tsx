import React from 'react'
import { headerClasses } from './headerClasses'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/storeHook'

const Header = () => {
    const {
        header,
        navContainer,
        navContent,
        linkHome,
        linkProfile,
        linkSignIn
    } = headerClasses

    const {user} = useAppSelector(state => state.auth);

  return (
    <header className={header}>
        <nav className={navContainer}>
            <div className={navContent}>
            <div className='flex items-center w-full'>
                <Link to='/' className={linkHome}>
                    Home
                </Link>
                {Boolean(!user) && 

                <Link to='/auth' className={linkSignIn}>
                    Sign In
                </Link>
                }
                <Link to="/profile">
                    profile
                </Link>
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Header