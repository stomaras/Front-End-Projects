import React from 'react'
import { useState, useEffect, useCallback } from 'react';


const QuestionTimer = ({timeout, onTimeout}) => {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        setTimeout(onTimeout, timeout);
    },[timeout, onTimeout]);

    useEffect(() => {
        console.log('SETTING INTERVAL');
        setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        },100);
    },[]);


  return (
    <progress id='question-time' max={timeout} value={remainingTime}/>
  )
}

export default QuestionTimer