
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

import { About, HomeLayout, Cocktail, Landing, Error, Newsletter, SinglePageError } from './pages'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import {action as newsletterAction} from "./pages/Newsletter";


// staleTime means how long the query is going to be valid

const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
        action:newsletterAction,
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/> 
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
    </>
  )
}

export default App
