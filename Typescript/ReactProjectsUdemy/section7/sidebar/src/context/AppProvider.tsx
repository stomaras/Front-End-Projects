import React, { useReducer, useState } from "react";
import { AppContext } from "./AppContext";
import { AppState } from "../interfaces/interfaces";

const INITIAL_STATE: AppState = {
    isModalOpen: false,
    isSidebarOpen: false
}


interface props {
    children: JSX.Element | JSX.Element[];
}


export const AppProvider = ({ children }: props) => {

    const [isOpenModal, setisOpenModal] = useState(false);
    const [isOpenSidebar, setisOpenSidebar] = useState(false);

    const appState: AppState = {
        isModalOpen: isOpenModal,
        isSidebarOpen: isOpenSidebar
    }

    const openSidebar = () => {
        setisOpenSidebar(true);
    }

    const closeSidebar = () => {
        setisOpenSidebar(false)
    }

    const openModal = () => {
        setisOpenModal(true);
    }

    const closeModal = () => {
        setisOpenModal(false);
    }


    return (
        <AppContext.Provider value={{
            appState,
            openModal,
            closeModal,
            openSidebar,
            closeSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;