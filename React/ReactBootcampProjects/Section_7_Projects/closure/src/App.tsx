import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dialog from './components/Dialog';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = (id:number) => (event:React.MouseEvent<HTMLButtonElement>) => {
    console.log(event,id);
  }

  return (
    <div>
      <Dialog title={'s'} onClick={handleClick}/>
    </div>
  );  
}

export default App
