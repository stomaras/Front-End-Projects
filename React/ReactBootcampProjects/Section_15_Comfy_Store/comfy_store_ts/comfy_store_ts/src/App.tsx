import React from 'react'
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



const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children: [
      {
        index:true,
        element:<Landing/>
      },
      {
        path:'products',
        element:<Products/>
      }, 
      {
        path:'products/:id',
        element:<SingleProduct/>
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