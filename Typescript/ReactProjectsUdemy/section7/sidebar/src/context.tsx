import { createContext, useState, useContext, FC } from "react"

interface AppContextInterface {
    isSideBarOpen: boolean;
    isModalOpen: boolean;
    openSidebar: () => {};
    closeSidebar: () => {};
    openModal: () => {};
    closeModal: () => {};
}

const AppContext = createContext<AppContextInterface | null>(null);

export const AppProvider: FC = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return <AppContext.Provider
        value 
        ={{
            isSidebarOpen,
            isModalOpen,
            openModal,
            openSidebar,
            closeModal,
            closeSidebar
        }}
    >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}