import React from 'react'
import { IStudent } from '../models/models';

export interface StudentsProps {
  student:IStudent;
}

const Student = (props:StudentsProps) => {

  const email = props.student.email;
  const firstName = props.student.firstName;
  const lastName = props.student.lastName;

  return (
    <article className='student'>
      <div className="info">
        <span className='student__firstName'>FirstName:</span> <span>{firstName}</span> 
      </div>
      <div className="info">
        <span className='student__lastName'>LastName:</span> <span>{lastName}</span> 
      </div>
      <div className="info">
        <span className='student__email'>Email:</span> <span>{email}</span>
      </div>
    </article>
  )
}

export default Student;