import React from 'react'
import { Human } from './data'
import { Person } from './Person'


interface ListProps  {
    persons: Human[]
}

const List = (props:ListProps) => {
  return (
      <section>
          {props.persons.map((person: any) => {
              return <Person key={person.id} {...person}></Person>
          })}
    </section>
  )
}

export default List