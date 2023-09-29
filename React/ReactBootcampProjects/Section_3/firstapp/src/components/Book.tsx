import React, { ReactNode } from 'react'
import Title from './Title'
import Image from './Image'
import Author from './Author'


interface BookPorps {
  author:string;
  title:string;
}

const Book = (props: BookPorps) => {
  const {author, title} = props;
  return (
    <article className='book'>
        <Title title={title}/>
        <Image/>
        <Author author={author}/>
    </article>
  )
}

export default Book