import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { Item } from './models/models';
import { nanoid } from 'nanoid';
import Items from './components/Items';
import { ToastContainer, toast } from 'react-toastify';


const setLocaleStorage = (items: Item[]) => {
  localStorage.setItem('list', JSON.stringify(items));
  console.log(localStorage);
}

const getLocaleStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    list = JSON.parse(localStorage.getItem('list') || '[]');
  }else {
    list = '[{}]';
  }
  return list;
}


const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

function App() {
  const [items, setItems] = useState<any>(defaultList);
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
    getLocaleStorage();
    toast.success('item added to the list')

  };

  const removeItem = (itemId:any) => {
    const newItems = items.filter((item:any)=> item.id !== itemId);
    setItems(newItems);
    setLocaleStorage(newItems);
    getLocaleStorage();
    toast.success('item deleted')
  }

  const editItem = (itemId:string) => {
    const newItems = items.map((item:any) => {
      if(itemId === item.id){
        const newItem = {...item, completed:!item.completed}
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocaleStorage(newItems);
  }

  return (
    <section className="section-center">
      <ToastContainer position='top-center'/>
      <Form addItem={addItem}/>
      <Items items={items} removeItem={removeItem} editItem={editItem}/>
    </section>
  );
}

export default App;
