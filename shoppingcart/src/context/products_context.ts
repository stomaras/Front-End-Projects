import axios from 'axios'
import React, { ReactNode, useContext, useEffect, useReducer } from 'react'
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

export interface ProductsState {
  isSidebarOpen:boolean;
}

const initialState:ProductsState = {
  isSidebarOpen:true
}

export const ProductsContext = React.createContext<ProductsState>(initialState)

type ProductsProviderProps = {
  children:ReactNode;
}

export const ProductsProvider= ({ children }:ProductsProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({type:'SIDEBAR_OPEN'})
  }

  useEffect(() => {
    openSidebar()
  },[])


  return (
    
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
