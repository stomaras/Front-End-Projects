import { useRef, useState } from 'react'
import './App.css'
import Counter, { CounterRef } from './components/Counter'
import TextInput from './components/TextInput'


function App() {
  const counterRef = useRef<CounterRef>(null);

  return (
    <>
      <Counter ref={counterRef}/>
      <button onClick={() => counterRef.current?.reset()}>Reset</button>
      <TextInput/>
    </>
  )
}

export default App
