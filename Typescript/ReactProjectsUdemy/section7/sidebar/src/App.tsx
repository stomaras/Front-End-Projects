import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar/>
    </>
  );
}

export default App;
