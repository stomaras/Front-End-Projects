import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import people from './data';
import { FaBeer, FaChevronLeft, FaChevronCircleLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {

  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index];
  console.log(name);
  
  return (
    <main>
      <article className='review'>
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className='quote-icon'>
            <FaQuoteRight/>
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
      </article>
    </main>
    
  );
}

export default App;
