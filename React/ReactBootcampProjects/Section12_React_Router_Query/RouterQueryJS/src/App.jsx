
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

import { About, HomeLayout, Cocktail, Landing, Error, Newsletter, SinglePageError } from './pages'

import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from "./pages/Cocktail";

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children: [
      {
        path:'/about',
        element: <About/>,
      },
      {
        path:'/cocktail/:id',
        element: <Cocktail/>,
        errorElement:<SinglePageError/>,
        loader:singleCocktailLoader
      },
      {
        path:'/landing',
        loader: landingLoader,
        element: <Landing/>,
        errorElement: <SinglePageError/>,
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
