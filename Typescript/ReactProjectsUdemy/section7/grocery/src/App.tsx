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
import Tokens from './utils/Tokens';
import { ToastContainer, toast } from 'react-toastify';

const tokens = Tokens.getInstance();
const setLocalStorage = (items: Item[]) => {
  tokens.setList(JSON.stringify(items));
  // localStorage.setItem('list', JSON.stringify(items))
};

const getLocalStorage = () => {
  // let list = localStorage.getItem('list') 
  let list = tokens.getList()
  if (list !== null) {
    // list = JSON.parse(localStorage.getItem('list') as any);
    list = JSON.parse(tokens.getList() as any)
  } else {
    list = [] as any
  }
  return list;
}

// const defaultList = JSON.parse(localStorage.getItem('list') || '[]')
const defaultList = JSON.parse(tokens.getList() || '[]');
function App() {

  getLocalStorage()
  const [items, setItems] = useState<any>(defaultList)

  const addItem = (itemName: string) => {
    const newItem: Item = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to the list');
  };

  const removeItem = (itemId: string) => {
    const newItems = items.filter((item:Item) => item.id !== itemId)
    setItems(newItems);
    setLocalStorage(newItems)
    toast.success("item deleted from the list")
  };

  const editItem = (itemId: string) => {
    const newItems = items.map((item: any) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }

  return (
    <section className='section-center'>
      <ToastContainer position='top-center'/>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}

export default App;
