import React from 'react'

interface TitleProps {
  title: string;
}

const Title = (props: TitleProps) => {
  const {title} = props;
  return (
    <h2>{title}</h2>
  )
}

export default Title