import React, { useState } from 'react'
import { IPerson } from './Interfaces/Models'

const Person = () => {

    const [person, setPerson] = useState<IPerson>({
        name:'peter',
        age:23,
        hobby:'read books'
    })


    const displayPerson = () => {
        setPerson({name:'john', age:26, hobby:'vollry'})
    }

  return (
    <>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>Enjoys : {person.hobby}</h3>
        <button className='btn' onClick={displayPerson}>Display Person</button>
    </>
  )
}

export default Person