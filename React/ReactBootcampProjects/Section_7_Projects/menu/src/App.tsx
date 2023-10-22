import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';

const tempCategories = menu.map((item) => { return item.category});
const uniqueCategories = new Set(tempCategories);
const uniqueCategoriesArray = Array.from(uniqueCategories);
const allCategories = ['all', ...uniqueCategoriesArray];
console.log(allCategories);



function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category:string) => {
    if(category === 'all'){
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu">
        <Title text={'Our Menu'}/>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu menuItems={menuItems} filterItems={filterItems}/>
      </section>
    </main>
  );
}

export default App;
