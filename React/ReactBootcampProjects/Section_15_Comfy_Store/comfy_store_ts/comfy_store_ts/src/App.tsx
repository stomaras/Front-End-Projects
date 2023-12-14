import React, { useState } from 'react'
import { 
About,
Cart,
Checkout,
Error,
HomeLayout,
Landing,
Orders,
Products,
Register,
SingleProduct,
Login,
} from './pages'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import ErrorElement from "./components/ErrorElement";

// loaders 
import {loader as landingLoader} from "./pages/Landing";
import {loader as SingleProductLoader} from "./pages/SingleProduct";
import {loader as productsLoader} from "./pages/Products";

// actions



const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children: [
      {
        index:true,
        element:<Landing/>,
        errorElement:<ErrorElement/>,
        loader:landingLoader,
      },
      {
        path:'products',
        element:<Products/>,
        errorElement:<ErrorElement/>,
        loader:productsLoader,
      }, 
      {
        path:'products/:id',
        element:<SingleProduct/>,
        errorElement:<ErrorElement/>,
        loader:SingleProductLoader,
      }, 
      {
        path:'cart',
        element:<Cart/>,
      },
      {
        path:'products',
        element:<Products/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'checkout',
        element:<Checkout/>
      },
      {
        path:'orders',
        element:<Orders/>
      },
    ],
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<Error/>
  },
  {
    path:'/register',
    element:<Register/>,
    errorElement:<Error/>
  }
])


const App = () => {


  return (

    <RouterProvider router={router}></RouterProvider>

  )
}

export default App