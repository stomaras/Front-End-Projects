import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import questions, { IQuestion } from './data';
import Questions from './Questions';

function App() {

  const [questionsData, setQuestionsData] = useState<IQuestion[]>(questions)
  return (
    <main>
      <Questions questions={questionsData}/>
    </main>
  );
}

export default App;
