import React from 'react'
import Title from './Title'
import Image from './Image'
import Author from './Author'

const Book = () => {
  return (
    <article className='book'>
        <Title/>
        <Image/>
        <Author/>
    </article>
  )
}

export default Book