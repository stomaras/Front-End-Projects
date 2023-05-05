import { createContext, useCallback, useContext } from "react"
import { AppState } from "../interfaces/interfaces";


export type AppContextProps = {
    appState: AppState;
    toggleModal: (isModalOpen: boolean) => void
    toggleSidebar: (isSidebarOpen: boolean) => void
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const useGlobalContext = () => {
    return useContext(AppContext)
}