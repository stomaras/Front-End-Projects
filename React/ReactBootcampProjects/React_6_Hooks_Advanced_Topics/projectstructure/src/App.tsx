import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home, About} from "./components/index"; 
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
        <Navbar/>
    </div>
  );
}

export default App;
