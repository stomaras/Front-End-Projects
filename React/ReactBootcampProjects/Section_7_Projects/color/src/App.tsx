import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "../src/components/Form";
import ColorList from "../src/components/ColorList";
import Values from "values.js";


function App() {

  const [colors, setColors] = useState(new Values('#f15025').all(10));
  // console.log(new Values('#f150125').all(10));
  console.log(colors);



  return (
    <div className="App">
      <Form/>
      <ColorList colors={colors}/>
    </div>
  );
}

export default App;
