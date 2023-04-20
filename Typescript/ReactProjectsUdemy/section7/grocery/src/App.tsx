import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from './Form';
import { nanoid } from 'nanoid';
import { Item } from "./models/models"
import { initialItemState } from './models/models';
import Items from './Items';
import { log } from 'console';

const setLocalStorage = (items: Item[]) => {
  localStorage.setItem('list', JSON.stringify(items))
};

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list !== null) {
    list = JSON.parse(localStorage.getItem('list') as string);
  } else {
    const list:string[] = []
  }
  return list;
}

function App() {

  getLocalStorage()
  const [items, setItems] = useState<Item[]>(initialItemState)

  const addItem = (itemName: string) => {
    const newItem: Item = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId: string) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems);
    setLocalStorage(newItems)
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}

export default App;
