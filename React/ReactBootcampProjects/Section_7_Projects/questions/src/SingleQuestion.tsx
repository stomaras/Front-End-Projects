import React, { useState } from 'react'
import { IQuestion } from './data'
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

interface SingleQuestionProp {
    question: IQuestion;
}

const SingleQuestion = (props: SingleQuestionProp) => {
    const {question} = props;

    const [showInfo, setShowInfo] = useState(false);

  return (
    <article className='question'>
        <header>
            <h5>{question.title}</h5>
            <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </header>
        {showInfo && <p>{question.info}</p>}
    </article>
  )
}

export default SingleQuestion