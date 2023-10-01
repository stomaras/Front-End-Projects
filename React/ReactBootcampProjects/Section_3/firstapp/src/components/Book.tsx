import React, { MouseEventHandler, ReactNode } from 'react'
import Title from './Title'
import Image from './Image'
import Author from './Author'


interface BookProps {
  id:number
  author:string;
  title:string;
  number:number;
  getBook: (id:number) => void;
}


const Book = (props: BookProps) => {
  const {author, title, getBook, id, number} = props;
  console.log(props);

  console.log(number);

  const getSingleBook = (e: React.MouseEvent<HTMLElement>) => {
    getBook(id)
  }

  return (
    <article className='book'>
        <Title title={title}/>
        <Image/>
        <Author author={author}/>
        <span className='number'>{number + 1}</span>
        <button onClick={getSingleBook}>Display value</button>
    </article>
  )
}

export default Book