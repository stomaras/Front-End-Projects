import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';
import persons from './data';

function App() {

  const [people, setPeople] = useState(persons);
  console.log(people)

  return (
    <div className="App">
      <ul>
        <PersonList persons={people}/>

      </ul>
    </div>
  );
}

export default App;
