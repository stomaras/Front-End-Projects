import React from 'react'

export interface SubmitBtnProps {
    text:string;
}

const SubmitBtn = ({text}:SubmitBtnProps) => {
  return (
    <button type='submit' className='btn btn-primary'>{text}</button>
  )
}

export default SubmitBtn