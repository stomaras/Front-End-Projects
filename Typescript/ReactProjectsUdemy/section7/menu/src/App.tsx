import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import  menus, { Menus }  from './data';
import Menu from './Menu';
import Categories from './Categories';

// // get all categories from all items on an array 
const tempCategories = menus.map((item) => item.category);

// // get unique categories on a Set
 const tempSet = new Set(tempCategories);

// // first go to tsconfig.json and set 
// // "downlevelIteration": true
// // then spread the items
const tempItems = ['all', ...tempSet];

const allCategories = ['all', ...new Set(menus.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState<Menus[]>(menus);
  const [categories, setCategories] = useState<string[]>(allCategories);
  return (
    <main>
      <section className='menu'>
        <Title text='our menu'></Title>
        <Menu items={menus} />
        <Categories categories={categories}/>
      </section>
    </main>
  );
}
export default App;