import React from 'react'
import { People } from '../models/models'
import Person from './Person'
import { memo } from 'react'

export interface ListProps  {
    people:People[]
}

const List = (props:ListProps) => {
    const {people} = props
  return (
    <section>
        {people.map((person) => {
            return (
                <Person key={person.id} name={person.name}/>
            )
        })}
    </section>
  )
}

export default memo(List)