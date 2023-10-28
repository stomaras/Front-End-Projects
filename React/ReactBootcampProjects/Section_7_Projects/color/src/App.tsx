import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "../src/components/Form";
import ColorList from "../src/components/ColorList";

function App() {
  return (
    <div className="App">
      <Form/>
      <ColorList/>
    </div>
  );
}

export default App;
