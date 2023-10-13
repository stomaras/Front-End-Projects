import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToogleChallenge from './ToogleChallenge';


/*
- create state value (boolean)
- return a button and a component/element
- when user clicks the button
- toggle state value
- conditionally render component/element

*/

function App() {
  return (
    <div className="App">
      <ToogleChallenge/>
    </div>
  );
}

export default App;
