import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props: any) => {
    return <div className={classes.backrop} onClick={props.onConfirm}></div>
};

const ModalOverlay = (props: any) => {
    return (
        <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
        </Card>
    );
}

export const ErrorModal = (props: any) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onConfirm} />, document.getElementById('backdrop-root') as Element)};   
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
            document.getElementById('ovarlay-root') as Element)};
        </>
    );
};
export default ErrorModal;
