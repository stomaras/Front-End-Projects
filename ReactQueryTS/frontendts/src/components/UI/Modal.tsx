import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
  children: React.ReactNode;
  onClose:() => void;
}

export default function Modal({ children, onClose }:ModalProps) {
  const dialog = useRef<any>();

  useEffect(() => {
    // Using useEffect to sync the Modal component with the DOM Dialog API
    // This code will open the native <dialog> via it's built-in API whenever the <Modal> component is rendered
    const modal = dialog.current;
    modal.showModal();

    return () => {
      modal.close(); // needed to avoid error being thrown
    };
  }, []);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
