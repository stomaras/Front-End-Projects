import React from 'react'
import { People } from '../models/models'
import Person from './Person'
import { memo } from 'react'

export interface ListProps  {
    people:People[]
    removePerson:(id:number) => void;
}

const List = (props:ListProps) => {
    const {people} = props
  return (
    <section>
        {people.map((person) => {
            return (
                <Person id={person.id} key={person.id} name={person.name} removePerson={props.removePerson}/>
            )
        })}
    </section>
  )
}

export default memo(List)