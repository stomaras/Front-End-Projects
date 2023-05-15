import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGlobalContext } from './Context/StrapiProvider';
import { log } from 'console';

function App() {

  const { isSidebarOpen } = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <h1>
      Strapi Header
    </h1>
  );
}

export default App;
