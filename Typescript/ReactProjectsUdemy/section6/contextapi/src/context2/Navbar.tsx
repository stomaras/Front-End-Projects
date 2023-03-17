import React, { useState, createContext } from 'react'
import NavLinks from './NavLinks'


export interface Person {
    name: string | null;
}

var initialPerson : Person = {
    name:'tom'
}

export type NavbarContent = {
    user: Person | null;
    logout():void
}


export const NavbarContext = createContext<NavbarContent>({
    user: initialPerson,
    logout: () => {}
});


const Navbar = () => {

    const [user, setUser] = useState<Person | null>(initialPerson)
    const logout = () => {
        setUser(null);
    };

    return (
        <NavbarContext.Provider value={{ user, logout }}>
            <nav className='navbar'>
                <h5>CONTEXT API</h5>
                <NavLinks />
            </nav>
        </NavbarContext.Provider>
    );
};

export default Navbar