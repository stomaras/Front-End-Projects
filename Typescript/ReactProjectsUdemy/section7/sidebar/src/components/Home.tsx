import React from 'react'
import { useGlobalContext } from '../context/AppContext'
import { FaBars } from "react-icons/fa";




export const Home = () => {
  const { toggleModal, toggleSidebar } = useGlobalContext()


  const handleSidebar = () => {
    toggleSidebar(false)
  }

  const handleModal = () => {
    toggleModal(false)
  }
  
  return (
    <main>
      <button onClick={handleSidebar}>
        <FaBars/>
      </button>
      <button onClick={handleModal}>
        show modal
      </button>
    </main>
  )
}

export default Home