import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Tours from './components/Tours';




export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Tours />
      <Footer/>
    </>
  )
}


export default App;
