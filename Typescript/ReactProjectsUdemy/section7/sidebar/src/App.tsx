import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <main>
      <Home />
      <Modal />
      <Sidebar/>
    </main>
  );
}

export default App;
