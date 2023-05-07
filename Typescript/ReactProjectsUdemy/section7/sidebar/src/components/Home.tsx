import React from 'react'
import { useGlobalContext } from '../context/AppContext'
import { FaBars } from "react-icons/fa";




export const Home = () => {
  const { openModal, openSidebar ,appState } = useGlobalContext()


  const handleSidebar = () => {
    openSidebar(!appState.isSidebarOpen)
  }

  const handleModal = () => {
    openModal(!appState.isModalOpen)
  }
  
  return (
    <main>
      <button onClick={handleSidebar} className='sidebar-toggle'>
        <FaBars/>
      </button>
      <button onClick={handleModal} className='btn'>
        show modal
      </button>
    </main>
  )
}

export default Home