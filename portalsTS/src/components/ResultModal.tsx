import React, { ForwardedRef, useImperativeHandle } from 'react';
import { forwardRef } from 'react';


export interface ResultModalProps {
    targetTime:any;
    remainingTime:number;
    onReset:() => void;
}

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset}:ResultModalProps, ref:ForwardedRef<any>) {

    const userLost = remainingTime <= 0;

  return (
    <dialog ref={ref} className='result-modal' onClose={onReset}>
        {userLost && <h2>You lost</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{(remainingTime / 1000).toFixed(2)} seconds left.</strong></p>
        <form method='dialog' onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
  );
})

export default ResultModal