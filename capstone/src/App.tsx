import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './categories.styles.scss'
import Category from './components/category-item/category'
import Directory from './components/directory/directory'
import { categories } from './data/data'

function App() {

  return (
    <div className='categories-container'>
      <Directory categories={categories}/>
    
  </div>
  )
}

export default App
