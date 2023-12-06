import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancel, clearCart } from '../state/action-creators';



const Modal = () => {

  const dispatch = useDispatch();


  const handleClear = () => {
    dispatch(clearCart())
    dispatch(cancel());
  }

  const handleCancel = () => {
    dispatch(cancel())
  }

  return (
    <aside className='modal-container'>
        <div className="modal">
            <h4>Remove all items from your shopping cart?</h4>
            <div className="btn-container">
                <button type='button' className="btn confirm-btn" onClick={handleClear}>confirm</button>
                <button type='button' className='btn clear-btn' onClick={handleCancel}>cancel</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal