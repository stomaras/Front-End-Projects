import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data, { Question } from "./data";
import Questions from './Questions';

function App() {
  const [questions, setQuestions] = useState<Question[]>(data);
  return (
    <main>
      <Questions questions={questions}/>
    </main>
  );
}

export default App;
