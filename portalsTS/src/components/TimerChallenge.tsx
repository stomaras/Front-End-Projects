import React, { useRef, useState } from 'react'

export interface TimerChallengeProps {
    title:string;
    targetTime:number;
}


const TimerChallenge = ({title, targetTime}:TimerChallengeProps) => {
    // value in refs does not lost whenever this component re-executes
    const timer = useRef<number | undefined>();


    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);



    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        },targetTime * 1000);
        setTimerStarted(true);
    }

    const handleStop = () => {
        clearTimeout(timer.current);
    }


  return (
    <section className='challenge'>
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className='challenge-time'>
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerStarted ? handleStop : handleStart}>
                {timerStarted ? 'Stop':'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active': undefined}>
            {timerStarted ? 'Time is running' : '.../Timer inactive'}
        </p>
    </section>
  )
}

export default TimerChallenge