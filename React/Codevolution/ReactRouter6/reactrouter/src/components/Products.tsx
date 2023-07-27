import React from 'react'
import {Link, Outlet} from "react-router-dom";

export const Products = () => {
  return (
    <>
        <div>
            <input type="search" placeholder='Search Products' />
        </div>
        <nav className='sub_nav'>
            <Link to='featured' className='sub_nav__featured'>Featured</Link>
            <Link to='new' className='sub_nav__new'>new</Link>
        </nav>
        <Outlet/>
    </>
  )
}
