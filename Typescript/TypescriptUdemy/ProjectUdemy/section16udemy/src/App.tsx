import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleInput from './components/SimpleInput';

function App() {
  return (
    <div className="App">
      <SimpleInput/>
    </div>
  );
}

export default App;

/*
Forms and inputs can assume different states
1) One or more inputs are invalid
    - Output input-specific error messages & highlight problematic inputs
    - Ensure form can not be submitted / saved
2) All inputs are valid
    - Allow form to be submitted / saved 

When to validate 
  3) When form is submitted
  4) When an input is losing focus 
  5) On every keystroke 
  6) Allows the user to enter a valid value before warning him/her 
  7) Avoid unnecessary warnings but maybe present feedback "too late"
*/
