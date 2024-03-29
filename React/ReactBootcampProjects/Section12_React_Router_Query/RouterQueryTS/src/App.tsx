import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About'
import HomeLayout from './pages/HomeLayout'
import Landing from './pages/Landing'
import Cocktail from './pages/Cocktail'
import Newsletter from './pages/Newsletter'
import Error from './pages/Error'

import {loader as landingLoader} from "./pages/Landing"; 
import {loader as SingleCocktailLoader} from "./pages/Cocktail";
import {action as newsletterAction} from "./pages/Newsletter";

import SinglePageError from './pages/SinglePageError'
// errors always bubble up set up an error element at parent

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
        loader:landingLoader,
      },
      {
        path:'cocktail/:id',
        element:<Cocktail/>,
        errorElement:<SinglePageError/>,
        loader:SingleCocktailLoader
      },
      {
        path:'newsletter',
        element:<Newsletter/>,
        action:newsletterAction,
        errorElement:<SinglePageError/>
      },
      {
        path:'about',
        element:<About/>,
      },
    ],
  },
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
  
}

export default App
