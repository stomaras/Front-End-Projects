import React from 'react'
import UserContainer from './UserContainer'
import { Person } from './Navbar'

export interface NavLinksProps {
    user: Person | null,
    logout():void
}

const NavLinks = ({user,logout}: NavLinksProps) => {
  return (
      <div className='nav-container'>
          <ul className='nav-links'>
              <li>
                  <a href="">home</a>
              </li>
              <li>
                  <a href="">about</a>
              </li>
          </ul>
          <UserContainer user={user} logout={logout} />
    </div>
  )
}

export default NavLinks