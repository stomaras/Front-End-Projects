import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from './Form';
import { nanoid } from 'nanoid';

function App() {
  const [items, setItems] = useState<any>([])


  const addItem = (itemName: string) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
    </section>
  );
}

export default App;
