import React, { ReactNode } from 'react'
import Title from './Title'
import Image from './Image'
import Author from './Author'


interface BookPorps {
  author:string;
  title:string;
  displayValue: () => void;
}

const Book = (props: BookPorps) => {
  const {author, title, displayValue} = props;

  const displayTitle = () => {
    console.log(title);
  }

  return (
    <article className='book'>
        <Title title={title}/>
        <Image/>
        <Author author={author}/>
        <button onClick={displayValue}>Display value</button>
    </article>
  )
}

export default Book