import { Person } from '../../../../../my-app/src/tutorial/05-leverage-javascript/final/Person';
import React from 'react'
import { people } from './data'

const List = () => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </div>
  )
}

export default List
