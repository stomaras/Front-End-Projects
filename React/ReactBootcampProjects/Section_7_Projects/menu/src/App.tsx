import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import menu from './data';
import Menu from './Menu';

function App() {
  const [menuItems, setMenuItems] = useState(menu)
  return (
    <main>
      <section className="menu">
        <Title text={'Our Menu'}/>
        <Menu menuItems={menuItems}/>
      </section>
    </main>
  );
}

export default App;
