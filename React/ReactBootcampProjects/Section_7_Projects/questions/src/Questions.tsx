import React from 'react'
import { IQuestion } from './data'
import SingleQuestion from './SingleQuestion';

export interface QuestionsProp {
    questions: IQuestion[];
}

const Questions = (props: QuestionsProp) => {
    const {questions} = props;
  return (
    <section className='container'>
        <h1>Questions</h1>
        {questions.map((question) => {
            return <SingleQuestion key={question.id} question={question}/>
        })}
        
    </section>
  )
}

export default Questions