import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import people from './data';

function App() {

  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index];
  console.log(name);
  
  return (
    <div className="App">
      Reviews Starter
    </div>
  );
}

export default App;
