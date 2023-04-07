import React, { useState } from 'react';
import text from "./data";
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState<String[]>([])

  const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const result = (e.target as HTMLInputElement).value
    const numericResult = Number(result);
    setCount(numericResult);
  }


  return (
    <section className='section-center'>
      <h4>tired of boring lorem ipsum?</h4>
      <form className='lorem-form'>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="amount" min='1' step='1' max='8' value={count}
          onChange={changeInput} />
        <button className='btn' type='submit'>Generate</button>
      </form>
    </section>
  );
}

export default App;
