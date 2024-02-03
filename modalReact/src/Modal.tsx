import React, { useRef } from 'react'
import "./Modal.css";

export interface ModalProps {
    isOpen:boolean;
    onClose:() => void;
    children:React.ReactNode;
}

const Modal = ({isOpen, onClose, children}:ModalProps) => {

    const modalRef = useRef<HTMLDialogElement>(null);

    const handleClose = () => {
        if(modalRef.current){
            modalRef.current.close();
            onClose();
        }
    }


  return (
    <dialog ref={modalRef} open={isOpen} className='modal'>
        <button className='close-button' onClick={handleClose}>
            &times;
        </button>
        {children}
    </dialog>
  )
}

export default Modal