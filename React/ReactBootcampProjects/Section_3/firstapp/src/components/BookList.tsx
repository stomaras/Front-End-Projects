import React, { ReactNode } from 'react'
import Book from './Book'
import '../index.css';
import EventExamples from './EventExamples';
import { title } from 'process';

export interface BookListProps {
  author:string;
  title:string;
}

export interface Book {
  author:string;
  title:string;
  id:number;
}


const books: Book[] = [
  {author: 'tom', title:'kids', id:1},
  {author: 'ger', title: 'coding for fun',id:2},
  {author: 'ag', title: 'thriller', id:3}
]

const BookList = ()=> {
  const displayValue = () => {
    console.log("tom");
  }  
  return (
    <section className='booklist'>
      <EventExamples/>
      {books.map((book, index) => {
          const {author, title} = book;
          return <Book {...book} key={book.id} displayValue={displayValue}/>
      })}
    </section>
  )
}

export default BookList