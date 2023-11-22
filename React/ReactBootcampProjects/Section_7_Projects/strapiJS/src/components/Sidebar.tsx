import React from 'react'
import { useGlobalContext } from '../context/Context'
import sublinks from '../data/data'
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {

    // const {isSidebarOpen, closeSidebar} = useGlobalContext();

  return (
    <article className='sidebar'>
        
        <div className="sidebar-container">
            <button className='close-btn'><FaTimes/></button>
            <div className="sidebar-links">
                {sublinks.map((item) => {
                    const {links, page, pageId} = item
                    return <article key={pageId}>
                        <h4>{page}</h4>
                        <div className="sidebar-sublinks">
                            {links.map((link) => {
                                const {url, label, id} = link;
                                return <a key={id} href={url}>{label}</a>
                            })}
                        </div>
                    </article>
                })}
            </div>
        </div>
    </article>
  )
}

export default Sidebar;