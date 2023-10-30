import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { Item } from './models/models';
import { nanoid } from 'nanoid';
import Items from './components/Items';



const setLocaleStorage = (items: Item[]) => {
  localStorage.setItem('list', JSON.stringify(items));
  console.log(localStorage);
}

const getLocaleStorage = () => {
  let list = localStorage.getItem('list');
  console.log(list);
}

function App() {
  const [items, setItems] = useState<Item[]>(
    [{name:'dummy', completed:false, id:'s'}]
  );

  getLocaleStorage();

  const addItem = (itemName:string) => {

    const newItem: Item = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocaleStorage(newItems);
  };

  const removeItem = (itemId:any) => {
    const newItems = items.filter((item)=> item.id !== itemId);
    setItems(newItems);
    setLocaleStorage(newItems);
  }

  return (
    <section className="section-center">
      <Form addItem={addItem}/>
      <Items items={items} removeItem={removeItem}/>
    </section>
  );
}

export default App;
