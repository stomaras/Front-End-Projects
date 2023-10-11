import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';
import persons from './data';
import "./index.css";

function App() {

  const [people, setPeople] = useState(persons);
  console.log(people)

  const handleClear = () => {
    setPeople([]);
  }

  return (
    <div className="container">
     <p className='message'>{people.length} Birthdays today</p>

      <ul className='list'>
        <PersonList persons={people}/>
        <button type='button' className='clear-button' onClick={handleClear}>Clear List</button>
      </ul>
    </div>
  );
}

export default App;
