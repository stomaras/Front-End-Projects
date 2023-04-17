import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from './Form';
import { nanoid } from 'nanoid';
import { Item } from "./models/models"
import { initialItemState } from './models/models';
import Items from './Items';

function App() {

  const [items, setItems] = useState<Item[]>(initialItemState)


  const addItem = (itemName: string) => {
    const newItem: Item = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
  };

  const removeItem = (itemId: number) => { };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}

export default App;
