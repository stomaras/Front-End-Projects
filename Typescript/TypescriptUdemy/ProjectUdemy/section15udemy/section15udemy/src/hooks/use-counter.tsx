import React, { useEffect, useState } from 'react'

const useCounter = (forwards:boolean = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                setCounter((prevCounter) => prevCounter + 1);    
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);
        
        return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter;

/*
You can return whatever you want to return inside of a custom hook
could be an array , an object , a number

*/
