import { createContext, useState, useContext } from "react";
import { StrapiState } from "../interfaces/interface";

export type StrapiContextProps = {
    isSidebarOpen: boolean;
    openSidebar: (isOpenSidebar: boolean) => void;
    closeSidebar: (isOpenSidebar: boolean) => void;
}

export const StrapiContext = createContext<StrapiContextProps>({} as StrapiContextProps);