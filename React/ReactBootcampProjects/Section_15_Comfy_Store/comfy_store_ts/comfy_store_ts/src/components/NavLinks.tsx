import React from 'react'
import { links } from '../data/data'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <>
    {links.map((link) => {
        return <li key={link.id}>
            <NavLink className='capitalize' to={link.url}>
                {link.text}
            </NavLink>
        </li>
    })}
    </>
  )
}

export default NavLinks