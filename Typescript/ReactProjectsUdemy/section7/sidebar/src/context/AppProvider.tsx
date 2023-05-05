import React, { useReducer } from "react";
import { AppContext } from "./AppContext";
import { AppState } from "../interfaces/interfaces";
import { AppReducer } from "./AppReducer";

const INITIAL_STATE: AppState = {
    isModalOpen: false,
    isSidebarOpen: false
}


interface props {
    children: JSX.Element | JSX.Element[];
}


export const AppProvider = ({ children }: props) => {

    const [appState, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    const toggleModal = (isModalOpen: boolean) => {
        dispatch({type: 'toggleModal', payload: {isModalOpen}})
    }

    const toggleSidebar = (isSidebarOpen: boolean) => {
        dispatch({type: 'toggleSidebar', payload: {isSidebarOpen}})
    }

    return (
        <AppContext.Provider value={{
            appState,
            toggleSidebar,
            toggleModal
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;