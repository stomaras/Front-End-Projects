import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Modal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
     <button onClick={openModal}>Open Modal</button>
     <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Hello I am modal</h2>
        <p>This is some modal component</p>
     </Modal>
    </>
  )
}

export default App
