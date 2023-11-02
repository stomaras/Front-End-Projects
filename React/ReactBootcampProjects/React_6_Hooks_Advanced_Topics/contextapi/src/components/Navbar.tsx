import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { User } from '../models/models'

const Navbar = () => {

    const [user, setUser] = useState<User | null>({name:'job'});

    const logout = () => {
        setUser(null);
    }

  return (
    <nav className='navbar'>
        <h1>CONTEXT API</h1>
        <NavLinks user={user} logout={logout}/>
    </nav>
  )
}

export default Navbar