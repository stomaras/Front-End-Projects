import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

export interface TimerChallengeProps {
    title:string;
    targetTime:number;
}


const TimerChallenge = ({title, targetTime}:TimerChallengeProps) => {
    // value in refs does not lost whenever this component re-executes
    const timer = useRef<number | undefined>();
    const dialogRef = useRef<HTMLDialogElement | undefined>();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <=0){
        clearInterval(timer.current);
        dialogRef.current?.showModal();
    }

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000);
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining =>prevTimeRemaining - 10);
        },10);
    }

    const handleStop = () => {
        dialogRef.current?.showModal();
        clearInterval(timer.current);
    }


  return (
    <>
        <ResultModal ref={dialogRef} remainingTime={timeRemaining} targetTime={targetTime} onReset={handleReset}/>
        <section className='challenge'>
            <h2>{title}</h2>
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop':'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active': undefined}>
                {timerIsActive ? 'Time is running' : '.../Timer inactive'}
            </p>
        </section>
    </>
    
  )
}

export default TimerChallenge