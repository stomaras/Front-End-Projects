import React, { FormEventHandler, useState } from 'react';
import texts from "./data";
import './App.css';
import { nanoid } from 'nanoid';

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState<string[]>([])
  const id = nanoid();

  const changeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const result = (e.target as HTMLInputElement).value
    const numericResult = parseInt(result);
    setCount(numericResult);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText(texts.slice(0,count)) 
  }

  return (
    <section className='section-center'>
      <h4>tired of boring lorem ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="amount" min='1' step='1' max='5' value={count}
          onChange={changeInput} />
        <button className='btn' type='submit'>Generate</button>
      </form>
      <article className='lorem-text'>
        {
          texts.map((item,index) => {
            return <p key={nanoid()}>{text[index]}</p>
          })
        }
      </article>
    </section>
  );
}

export default App;
