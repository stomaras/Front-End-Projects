import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "../src/components/Form";
import ColorList from "../src/components/ColorList";
import Values from "values.js";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer, toast} from "react-toastify"


function App() {

  const [colors, setColors] = useState(new Values('#f15025').all(10));
  // console.log(new Values('#f150125').all(10));
  console.log(colors);

  const addColor = (color:any) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    }catch(err) {
      console.log(err);
      toast.error("Unable to parse color")
    }

  }


  return (
    <div className="App">
      <Form addColor={addColor}/>
      <ColorList colors={colors}/>
      <ToastContainer position='top-center'/>
    </div>
  );
}

export default App;
