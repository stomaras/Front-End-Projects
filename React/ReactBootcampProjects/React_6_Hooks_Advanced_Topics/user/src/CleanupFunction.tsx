import React, { useState, useEffect } from 'react'

const CleanupFunction = () => {

    const [toggle, setToggle] = useState(false);
  return (
    <div>
        <button className='btn' onClick={() => {setToggle(!toggle)}}>Toggle</button>
        {toggle && <RandomComponent/>}
    </div>
  )
}

const RandomComponent = () => {
    useEffect(() => {
        console.log("hmm, this is interesting");
    },[]);
    return <h1>hello there</h1>
}

export default CleanupFunction