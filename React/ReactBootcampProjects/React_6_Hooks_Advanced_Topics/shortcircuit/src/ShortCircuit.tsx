import React, { useState } from 'react'

const ShortCircuit = () => {

    // falsy
    const [text, setText] = useState('');

    // truthy
    const [name, setName] = useState("Tom");

  return (
    <div>
        <h4>FALSY OR: {text || 'hello'}</h4>
        <h4>FALSY AND: {text && 'hello world'}</h4>
        <h4>Truthy OR: {name || 'hello world'}</h4>
        <h4>Truthy AND: {name && 'hello world'}</h4>
    </div>
  )
}

export default ShortCircuit