import React from 'react'
import {useNavigate} from "react-router-dom";
import classes from "./Modal.module.css";

const Modal = ({children}) => {

    const navigate = useNavigate();

    function closeHanlder() {
        navigate('/');
    }
  
return (
    <>
        <div className={classes.backdrop} onClick={closeHanlder}/>
        <dialog open className={classes.modal}>{children}</dialog>
    </>
  )
}

export default Modal