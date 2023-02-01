import { Fragment } from "react";
import classes from "./Modal.module.css"
import ReactDOM  from "react-dom";

const Backdrop = (props: any) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = (props: any) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};

const portalElement = document.getElementById('overlays')!;


export const Modal = (props: any) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
};

export default Modal;

/*
Create Portal need two arguments 
1) What to portal 
2) Where to portal


*/
