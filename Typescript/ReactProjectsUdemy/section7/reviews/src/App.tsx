import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import people from './data';
import { FaBeer, FaChevronLeft, FaChevronCircleLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {

  const [index, setIndex] = useState<any>(0)
  const { name, job, image, text } = people[index];

  const checkNumber = (number: Number):Number => {
    if (number > people.length - 1) {
      return 0;  
    }
    if (number < 0) {
      return people.length -1;  
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((currentIndex: number) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex: number) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };
  
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
        <div className="btn-container">
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft/>
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight/>
          </button>
        </div>
      </article>
    </main>
    
  );
}

export default App;
