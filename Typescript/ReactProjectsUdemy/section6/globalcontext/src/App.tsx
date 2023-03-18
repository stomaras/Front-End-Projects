import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useGlobalContext } from './context';

function App() {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
    </div>
  );
}

export default App;
