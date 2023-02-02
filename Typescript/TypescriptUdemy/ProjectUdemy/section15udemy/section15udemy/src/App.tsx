import React from 'react';
import logo from './logo.svg';
import './App.css';
import ForwardCounter from './components/ForwardCounter';
import BackwardCounter from './components/BackwardCounter';

function App() {
  return (
    <div className="App">
      <ForwardCounter />
      <BackwardCounter/>
    </div>
  );
}

export default App;

/*
In custom hooks you have to start with use 


*/
