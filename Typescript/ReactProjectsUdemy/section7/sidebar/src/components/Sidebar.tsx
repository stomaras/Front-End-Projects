import React from 'react'
import logo from "../logo.svg"
import { social, links } from "../data/data";
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/AppContext';

export const Sidebar = () => {
  const { appState, closeSidebar } = useGlobalContext()
  
  const closesidebar = () => {
    closeSidebar(!appState.isSidebarOpen)
  }


  return (
    <aside className={appState.isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className='logo' />
        <button className='close-btn' onClick={closesidebar}>
          <FaTimes/>
        </button>
      </div>
      <ul className="links">
        {
          links.map((link) => {
            const {id, url, text, icon} = link
            return <li key={id}>
              <a href={url}>
                {icon}{text}
              </a>
            </li>
          })
        }
      </ul>
      <ul className="social-links">
        {
          social.map((link) => {
            const {id, url, icon} = link
            return <li key={id}>
              <a href={url}>
                {icon}
              </a>
            </li>
          })
        }
      </ul>
    </aside>
  )
}

export default Sidebar