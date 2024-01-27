import React, { useEffect } from 'react'
import { useState } from 'react'
import quizCompleteImg from "../assets/quiz-complete.png";

import QUESTIONS from '../Questions';

const Quiz = () => {
    const [activeQuestion, setActiveQuestionIndex] = useState();
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }

    if(quizIsComplete){
        return <>
            <div id='summary'>
                <img src={quizCompleteImg} alt="Trophy icon"/>
                <h2>Quiz Completed</h2>
            </div>
        </>
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);
    
    return (
        <div id="quiz">
            <div id='question'>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id='answers'>
                {shuffledAnswers.map((answer) => {
                    return (
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
        </div>
        
  )
}

export default Quiz