import { Test } from './Test';
import React from 'react';
import './App.css';
import { Home, About } from "../src/Pages/index";
import Example from './Example';

function App() {
  return (
    <div className="App">
      <Example />
      <Test     />
    </div>
  );
}

export default App;
