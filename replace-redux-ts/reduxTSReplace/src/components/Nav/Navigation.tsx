import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <header className='main-header'>
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>All Products</NavLink>
                </li>
                <li>
                    <NavLink to='/favorites'>Favorites</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation