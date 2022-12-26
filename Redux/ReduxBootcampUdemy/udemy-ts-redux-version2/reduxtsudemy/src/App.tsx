import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import {useSelector} from "react-redux";

function App() {
  const reduxState: any = useSelector((state) => state);
  const {CounterState: {count}} = reduxState
  console.log('reduxState', reduxState);

  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
