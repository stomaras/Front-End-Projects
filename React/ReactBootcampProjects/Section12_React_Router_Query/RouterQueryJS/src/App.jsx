
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

import { About, HomeLayout, Cocktail, Landing, Error, Newsletter } from './pages'

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    children: [
      {
        path:'/about',
        element: <About/>,
        children: [
          {
            path:'company',
            element: <h2>our company</h2>,
          },
          {
            path:'person',
            element: <h2>john doe</h2>
          }
        ]
      },
      {
        path:'/cocktail',
        element: <Cocktail/>,
      },
      {
        path:'/landing',
        element: <Landing/>,
      },
      {
        path:'/newsletter',
        element: <Newsletter/>,
      },
      {
        path:'/error',
        element: <Error/>,
        
      },
    ]
  },
  
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
