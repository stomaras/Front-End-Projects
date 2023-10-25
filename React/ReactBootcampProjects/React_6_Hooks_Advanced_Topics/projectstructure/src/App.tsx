import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home, About} from "./components/index"; 
import Navbar from "./components/Navbar";
import Example from './Example/Example';

function App() {
  return (
    <div className="container">
        <Navbar/>
        <Example/>
    </div>
  );
}

export default App;
