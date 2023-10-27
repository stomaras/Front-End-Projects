import React from 'react';
import logo from './logo.svg';
import './App.css';
import ControlledInputs from "./components/ControlledInputs";
import UserChallenge from './components/UserChallenge';

function App() {
  return (
    <div className="App">
      {/* <ControlledInputs/> */}
      <UserChallenge/>
    </div>
  );
}

export default App;
