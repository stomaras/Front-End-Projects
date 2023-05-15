import { StrapiState } from "../interfaces/interface";
import { StrapiContext } from "./StrapiContext"
import { useState, useContext } from "react"

const INITIAL_STATE: StrapiState = {
    isSidebarOpen: false
}

interface props {
    children: JSX.Element | JSX.Element[];
}

const StrapiProvider = ({ children }: props) => {
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const strapiState: StrapiState = {
        isSidebarOpen: isSidebarOpen
    }

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

  return (
      <StrapiContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar}}>
          {children}
    </StrapiContext.Provider>
  )
}

export default StrapiProvider

export const useGlobalContext = () => {
    return useContext(StrapiContext);
}