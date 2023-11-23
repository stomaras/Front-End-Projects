import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { defaultItems } from './data/data'
import { ITask } from './models/models'
import { ToastContainer } from 'react-toastify'
import Form from './components/Form'
import Items from './components/Items'


function App() {

  const [items, setItems] = useState<ITask[]>(defaultItems);

  return (
    <>
      <section className='section-center'>
        <ToastContainer position='top-center'/>
        <Form/>
        <Items items={items}/>
      </section>
    </>
  )
}

export default App
