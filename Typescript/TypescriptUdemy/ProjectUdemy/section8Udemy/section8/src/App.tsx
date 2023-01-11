import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';

function App() {
  return (
    <div className="App" data-testid="app">
      <AddUser/>
    </div>
  );
}

export default App;
