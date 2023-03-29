import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export interface SingleQuestionProps{
    id: number;
    title: string;
    info: string;
}

const SingleQuestion = (props:SingleQuestionProps) => {
  
    const[showInfo, setShowInfo] = useState<boolean>(false)

    return (
        <article className='question'>
            <header>
                <h5>{props.title}</h5>
            </header>
            <p>{props.info}</p>
    </article>
  )
}

export default SingleQuestion