import React from 'react'

export interface SectionTitleProps {
    text:string;
}

const SectionTitle = (props:SectionTitleProps) => {

    const {text} = props;

  return (
    <div className='border-b border-gray-200 pb-5'>
        <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
    </div>
  )
}

export default SectionTitle