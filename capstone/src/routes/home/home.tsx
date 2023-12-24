import React from 'react'
import Directory from '../../components/directory/directory'
import { categories } from '../../data/data'

const Home = () => {
  return (
    <div className='categories-container'>
      <Directory categories={categories}/>
    
  </div>
  )
}

export default Home