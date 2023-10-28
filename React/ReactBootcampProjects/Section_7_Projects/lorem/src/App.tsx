import React, { useState } from 'react';
import './App.css';
import data from "../src/data/data";
import { nanoid } from 'nanoid';



function App() {

  const [count, setCount] = useState<number>(1);
  const [text, setText] = useState(data);

  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let amount = count;
    setText(data.slice(0,amount));
  }

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className='lorem-form' action="" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="amount" min='1' max='8' step='1' value={count} onChange={handleChangeInput} />
        <button className='btn' type='submit'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={nanoid()}>{item}</p>
        })}
      </article>
    </section>
    );
}

export default App;
