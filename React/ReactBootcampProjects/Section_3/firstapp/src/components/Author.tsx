import React from 'react'

interface AuthorProps {
  author: string
}

const Author = (props: AuthorProps) => {
  const inlineHeadingStyles = {
    color:'#617d98',
    fontSize:'0.75',
    marginTop:'0.5rem'
  }
  return (
    <h4 style={inlineHeadingStyles}>{props.author}</h4>
  )
}

export default Author