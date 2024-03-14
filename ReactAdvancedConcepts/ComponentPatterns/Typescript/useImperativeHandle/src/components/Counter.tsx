import React from 'react'
import { forwardRef, Ref, useState, useImperativeHandle } from 'react'

export interface CounterProps {}

export type CounterRef = {
    checkSubscribed:(value:boolean) => void;
    reset:() => void;
}

const Counter = (props:CounterProps, ref:Ref<CounterRef>) => {
  
    const [count, setCount] = React.useState(0)

    const increment = () => {
        setCount((count) => count + 1)
    }

    const decrement = () => {
        setCount((count) => count - 1)
    }

    // useImperativeHandle used to expose different fucntionalities to parents
    // and doint it throug a ref

    const reset = () => {
        setCount(0)
    }

    // with this any parent that calls the Counter Component can provide a ref and the we will have access to all 
    // of these exposed functions
    useImperativeHandle(ref, () => ({
        reset,
        checkSubscribed:(value) => console.log(value),
        
    }));

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
  )
}

export default forwardRef(Counter);