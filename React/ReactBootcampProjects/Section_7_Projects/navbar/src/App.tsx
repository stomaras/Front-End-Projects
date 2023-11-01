import { useState , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from "./assets/react.svg";

import './App.css'
import { ILink } from './models';

function App() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);

  const toggleShowLinks = () => {
    console.log(showLinks);
    setShowLinks(!showLinks);
  }

  const linkStyles :any= {
    height:showLinks ? `${linksRef?.current?.getBoundingClientRect().height}px` : '0px'
  }

  return ( 
  <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className='logo' />
          <button className="nav-toggle" onClick={toggleShowLinks}>
            <FaBars/>
          </button>
        </div>
          <div className='links-container' ref={linksContainerRef} style={linkStyles}>
          <ul className="links" ref={linksRef}>
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
