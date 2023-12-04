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
      <span className='student__firstName'>FirstName:</span>{firstName}
      <span className='student__lastName'>LastName:</span>{lastName}
      <span className='student__email'>Email:</span>{email}
    </article>
  )
}

export default Student;