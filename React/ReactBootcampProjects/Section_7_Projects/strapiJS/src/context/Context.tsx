import { createContext, useState, useContext, useReducer, useMemo, ReactElement } from "react";

export interface SidebarType {
    isOpen:boolean;
}

type SidebarStateType = {sidebar: SidebarType};

const initSidebarState: SidebarStateType = {sidebar: {isOpen:false}};

const REDUCER_ACTION_TYPE = {
    OPENSIDEBAR:'OPENSIDEBAR',
    CLOSESIDEBAR: 'CLOSESIDEBAR'
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
    type:string;
    payload: SidebarType | undefined;
}

const reducerSidebar = (state:SidebarStateType, action:ReducerAction): SidebarStateType => {
    switch(action.type) {
        case REDUCER_ACTION_TYPE.OPENSIDEBAR: {
            return {...state, sidebar:{isOpen:true}}
        }
        case REDUCER_ACTION_TYPE.CLOSESIDEBAR: {
            return { ...state, sidebar:{isOpen:false}}
        }
        default:
            throw new Error("Error")
    }
}

export const useSidebarContext = (initSidebarState: SidebarStateType) => {
    const [state, dispatch] = useReducer(reducerSidebar, initSidebarState);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE;
    },[]);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return { dispatch, REDUCER_ACTIONS, openSidebar, closeSidebar , isSidebarOpen};
};

export type UseSidebarContextType = ReturnType<typeof useSidebarContext>;

const initSidebarContextState: UseSidebarContextType = {
    dispatch: () => {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    openSidebar: () => {},
    closeSidebar:() => {},
    isSidebarOpen:false,
}

export const SidebarContext = createContext<UseSidebarContextType>(initSidebarContextState);

type ChildrenType = {children?:ReactElement | ReactElement[]};

export const SidebarProvider = ({children}: ChildrenType):ReactElement => {
    return (
        <SidebarContext.Provider value={useSidebarContext(initSidebarState)}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useSidebarContext(initSidebarState)
};