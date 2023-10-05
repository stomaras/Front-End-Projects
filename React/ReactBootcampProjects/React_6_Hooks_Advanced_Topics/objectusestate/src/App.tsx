import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';

function App() {
  return (
    <div className="App">
      <Person></Person>
    </div>
  );
}

export default App;

/*

Setup CHallenge:
- set up three state values
  - name(string)
  - age(number)
  - hobby (string)
- render in the browser
- create a button
  - setup a function
    - update all three state values
- as a result once the user clicks the button,
  new person is displayed in the browser


*/
