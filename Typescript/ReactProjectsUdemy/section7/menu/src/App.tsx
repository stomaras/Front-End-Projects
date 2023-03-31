import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import  menus, { Menus }  from './data';
import Menu from './Menu';

function App() {
  const [menuItems, setMenuItems] = useState<Menus[]>(menus);
  return (
    <main>
      <section className='menu'>
        <Title text='our menu'></Title>
        <Menu items={menus} />
      </section>
    </main>
  );
}

export default App;
