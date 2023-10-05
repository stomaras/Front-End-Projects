import React, { useState } from 'react'

/* 

useState Hook

Re-renders , on the other hand , happen when the components state or props change, and the component need to be updated 
to the dom to reflect these changes.
*/

const ErrorExample = () => {

    let num = 0;

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1);
    }

  return (
    <div>
        <h2>You clicked {count} times</h2>
        <button type='button' onClick={handleClick} className='btn'>Increase</button>
    </div>
  )
}

export default ErrorExample