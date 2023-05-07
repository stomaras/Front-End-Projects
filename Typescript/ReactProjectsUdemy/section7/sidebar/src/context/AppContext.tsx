import { createContext, useCallback, useContext } from "react"
import { AppState } from "../interfaces/interfaces";


export type AppContextProps = {
    appState: AppState;
    openModal: (isModalOpen: boolean) => void
    openSidebar: (isSidebarOpen: boolean) => void,
    closeModal: (isModalOpen: boolean) => void,
    closeSidebar: (isSidebarOpen: boolean) => void
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const useGlobalContext = () => {
    return useContext(AppContext)
}