import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context/AppContext'

export const Modal = () => {
  const { closeModal, appState } = useGlobalContext();

  const closeAllModal = () => {
    closeModal(!appState.isModalOpen)
  }

  return (
    <div className={appState.isModalOpen ? 'modal-overlay show-modal': 'modal-overlay'}>
      <div className="modal-container">
        <h3>Modal content</h3>
        <button className='close-modal-btn' onClick={closeAllModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal