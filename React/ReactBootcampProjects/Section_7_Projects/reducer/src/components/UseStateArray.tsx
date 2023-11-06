import React from 'react'
import { data } from '../data/data'
import { Person } from '../models/models';

const UseStateArray = () => {
    const [people, setPeople] = React.useState<Person[]>(data);
  return (
    <div>
        {people.map((person) => {
            const {id, name} = person
            return <h4 key={id}>{name}</h4>
        })}
    </div>
  )
}

export default UseStateArray