import React from 'react'
import { Question } from './data'
import SingleQuestion from './SingleQuestion'

export interface QuestionsProps {
    questions: Question[]
}

const Questions = (props: QuestionsProps) => {
    
  return (
      <section className='container'>
          <h1>Questions</h1>
          {
              props.questions.map((question) => {
                  return <SingleQuestion key={question.id}{...question}/>
              })
          }
    </section>
  )
}

export default Questions