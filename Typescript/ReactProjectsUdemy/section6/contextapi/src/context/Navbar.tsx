import React, { useState } from 'react'
import NavLinks from './NavLinks'


export interface Person {
    name: string | null;
}

var initialPerson : Person = {
    name:'tom'
}

const Navbar = () => {

    const [user, setUser] = useState<Person | null>(initialPerson)
    const logout = () => {
        setUser(null);
    };

    return (
        <nav className='navbar'>
            <h5>CONTEXT API</h5>
            <NavLinks user={user} logout={logout} />
        </nav>
    )
}

export default Navbar