import React from 'react'
import { headerClasses } from './headerClasses'
import { Link } from 'react-router-dom'

const Header = () => {
    const {
        header,
        navContainer,
        navContent,
        linkHome,
        linkProfile,
        linkSignIn
    } = headerClasses

  return (
    <header className={header}>
        <nav className={navContainer}>
            <div className={navContent}>
            <div className='flex items-center w-full'>
                <Link to='/' className={linkHome}>
                    Home
                </Link>
                <Link to='/auth' className={linkSignIn}>
                    Sign In
                </Link>
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