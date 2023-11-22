import { createContext, useState, useContext } from "react";

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

            const newIsOpen = true;

            return {...state, sidebar:{isOpen:newIsOpen}}
        }
        default:
            throw new Error("Error")
    }
}