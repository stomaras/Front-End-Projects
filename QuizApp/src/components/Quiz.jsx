import React, { useEffect, useCallback } from 'react'
import { useState } from 'react'
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from './QuestionTimer';
import QUESTIONS from '../Questions';

const Quiz = () => {
    const [activeQuestion, setActiveQuestionIndex] = useState();
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState('unanswered');

    const activeQuestionIndex = answerState === '' ? userAnswers.length: userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered');
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });

        setTimeout(() => {
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            }else {
                setAnswerState('wrong');
            }

            setTimeout(() => {
                setAnswerState('');
            },2000);
        },1000)
    },[activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null)
    },[handleSelectAnswer]);

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
            <QuestionTimer 
                key={activeQuestionIndex}
                timeout={10000} 
                onTimeout={handleSkipAnswer}
            />
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id='answers'>
                {shuffledAnswers.map((answer) => {
                    let cssClasses = '';
                    const isSelected = userAnswers[userAnswers.length -1] === answer;


                    if(answerState === 'answered' && isSelected) {
                        cssClasses = 'selected';
                    }

                    if((answerState === 'correct' || answerState === 'wrong') && isSelected){
                        cssClasses = answerState;
                    }

                    return (
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)} className={cssClasses}>{answer}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
        </div>
        
  )
}

export default Quiz