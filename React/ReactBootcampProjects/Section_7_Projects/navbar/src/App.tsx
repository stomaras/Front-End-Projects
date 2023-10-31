import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from "./assets/react.svg";

import './App.css'
import { ILink } from './models';

function App() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleShowLinks = () => {
    setShowLinks(!showLinks);
  }

  return ( <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className='logo' />
          <button className="nav-toggle" onClick={toggleShowLinks}>
            <FaBars/>
          </button>
        </div>
          <div className={showLinks ? 'links-container show-container' : 'links-container'}>
          <ul className="links">
            {links.map((link:ILink) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        
        
      </div>
    </nav>
  )
}

export default App;
