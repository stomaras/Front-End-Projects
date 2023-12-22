import axios from 'axios'
import React, { ReactNode, createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

interface ModalState {
  isSidebarOpen:boolean;
}

interface ModalAction {
  type:string;
}

interface ModalContext {
  state:ModalState;
  dispatch:React.Dispatch<ModalAction>
  openSidebar:() => void;
  closeSidebar:() => void;
}

const initialState:ModalState = {
  isSidebarOpen: false
}

const ModalContext = createContext<ModalContext>({
  state:initialState,
  dispatch: () => null,
  openSidebar:() => {},
  closeSidebar: () =>{},
});

export function ModalProvider({children}:{children:React.ReactNode}){
  const [state, dispatch] = useReducer(ModalReducer, initialState);
  console.log(state.isSidebarOpen);
  

  const openSidebar = () => {
    dispatch({type:'openModal'})
  }

  const closeSidebar = () => {
    dispatch({type:'closeModal'})
  }


  return (
    <ModalContext.Provider value={{state, dispatch, openSidebar, closeSidebar}}>
      {children}
    </ModalContext.Provider>
  )
}



function ModalReducer(state:ModalState, action:ModalAction):ModalState {
  switch(action.type){
    case 'openModal':   
      console.log("open sidebar");   
      console.log(state.isSidebarOpen);
      
      state.isSidebarOpen = true;
      console.log(state.isSidebarOpen);
      
      return state;
    case 'closeModal':
      state.isSidebarOpen = false;
      return state;
    default:
      throw new Error("Unkown action")
  }
}


export function useModalContext() {
  return useContext(ModalContext);
}