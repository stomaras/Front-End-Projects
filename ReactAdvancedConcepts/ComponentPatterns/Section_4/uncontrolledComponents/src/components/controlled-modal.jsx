import { useState } from "react";
import {styled} from "styled-components"

const ModalBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    overflow: auto;
    background-color: #0000067;
    width: 100%;
    height: 100%;
`;

const ModalContent = styled.div`
    margin:12% auto;
    padding: 20px;
    background-color: #fff;
    width:40%;
`;

export const ControlledModal = ({shouldDisplay, onClose, children}) => {
    return (
        <>
            {shouldDisplay && (
                <ModalBackground onClick={onClose}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <button onClick={onClose}>Hide Modal</button>
                        {children}
                    </ModalContent>
                </ModalBackground>
            )}
        </>
    );
};
