import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [items, setItems] = useState<any>([])
  return (
    <section className='section-center'>
      <Form/>
    </section>
  );
}

export default App;
