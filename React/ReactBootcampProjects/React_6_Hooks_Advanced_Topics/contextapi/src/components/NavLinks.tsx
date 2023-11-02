import React from 'react'
import { User } from '../models/models'
import UserContainer from './UserContainer';

interface NavLinksProps {
    user:User | null;
    logout: () => void;
}

const NavLinks = (props: NavLinksProps) => {

    const {user, logout} = props;

  return (
    <div className="nav-container">
        <ul className="nav-links">
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
        </ul>
        <UserContainer logout={logout}/>
    </div>
  )
}

export default NavLinks