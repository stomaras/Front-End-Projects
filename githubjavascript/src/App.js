import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Dashboard/>,
    errorElement:<Error/>
  },
  {
    path:'login',
    element:<Login/>,
    errorElement:<Error/>
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>

  );
}

export default App;
