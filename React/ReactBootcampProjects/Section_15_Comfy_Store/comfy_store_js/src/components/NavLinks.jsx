import React from 'react'
import { links } from '../data/data';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const {id, url, text} = link;
        return (
          <li key={id}>
            <NavLink className='capitalize' to={url}>
              {text}
            </NavLink>
          </li>
        )
      })}
    </>
  )
}

export default NavLinks;