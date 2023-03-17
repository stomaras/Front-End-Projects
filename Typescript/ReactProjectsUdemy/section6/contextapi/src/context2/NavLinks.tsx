import React from 'react'
import UserContainer from './UserContainer'
import { Person } from './Navbar'



const NavLinks = () => {
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
          <UserContainer/>
    </div>
  )
}

export default NavLinks