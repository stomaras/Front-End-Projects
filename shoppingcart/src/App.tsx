import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage, SingleProductPage, ProductsPage, AboutPage, CheckoutPage, ErrorPage, PrivateRoute, CartPage } from './pages'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          path:'about',
          element:<AboutPage/>
        },
        {
          path:'cart',
          element:<CartPage/>
        },
        {
          path:'products',
          element:<ProductsPage/>
        },
        {
          path:'products/:id',
          element:<SingleProductPage/>,
        },
        {
          path:'checkout',
          element:<CheckoutPage/>
        }
      ]
    }
  ])

  return (
    // <Routes>
    //     <Navbar/>
    //     <Sidebar/>
    //     <Route path='/' element={<HomePage/>}></Route>
    //     <Route path='/about' element={<AboutPage/>}></Route>
    //     <Route path='/cart' element={<CartPage/>}></Route>
    //     <Route path='/products' element={<ProductsPage/>}></Route>
    //     <Route path='/checkout' element={<CheckoutPage/>}></Route>
    //     <Route path='*' element={<ErrorPage/>}></Route>
    // </Routes>
    <RouterProvider router={router}></RouterProvider>

  )
}

export default App
