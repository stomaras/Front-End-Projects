import React, { ReactNode } from 'react'
import Book from './Book'
import '../index.css';
import EventExamples from './EventExamples';
import { title } from 'process';
import books from "../data/Books"

export interface BookListProps {
  author:string;
  title:string;
}


/* 
More Complex Example

- create getBook function in BookList
- accepts id as an argument and finds the book
- pass the function down to Book Component and invoke on the button click
- in the Book Component destructure id and function
- invoke the function when user clicks the button, pass the id 
- the goal : you should see the same book in the console.

*/

const BookList = ()=> {

  const getBook = (id:number) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
    console.log(id);
  }


  return (
    <section className='booklist'>
      <EventExamples/>
      {books.map((book, index) => {
          const {author, title} = book;
          return <Book {...book} key={book.id} getBook = {getBook}/>
      })}
    </section>
  )
}

export default BookList