import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}


export default App;

/*

UI Folder :
- Place general UI Elements, input component, card component

Layout Folder :
- Header Component

Meals Folder :
- That's folder will hold that list of meals, but also the individual meal item components.

Card Folder : 
- Will hold all the card related components.




*/
