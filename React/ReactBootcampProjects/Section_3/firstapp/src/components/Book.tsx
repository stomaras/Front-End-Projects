import React, { MouseEventHandler, ReactNode } from 'react'
import Title from './Title'
import Image from './Image'
import Author from './Author'


interface BookProps {
  id:number
  author:string;
  title:string;
  getBook: (id:number) => void;
}


const Book = (props: BookProps) => {
  const {author, title, getBook, id} = props;
  console.log(props);

  const getSingleBook = (e: React.MouseEvent<HTMLElement>) => {
    getBook(id)
  }

  return (
    <article className='book'>
      id: {id}
        <Title title={title}/>
        <Image/>
        <Author author={author}/>
        <button onClick={getSingleBook}>Display value</button>
    </article>
  )
}

export default Book