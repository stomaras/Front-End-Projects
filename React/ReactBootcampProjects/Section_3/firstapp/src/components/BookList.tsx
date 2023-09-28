import React from 'react'
import Book from './Book'
import '../index.css';

const BookList = () => {
  return (
    <section className='booklist'>
        <Book/>
        <Book/>
        <Book/>
    </section>
  )
}

export default BookList