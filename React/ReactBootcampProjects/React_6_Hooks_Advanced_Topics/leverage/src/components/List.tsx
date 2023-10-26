import { Person} from './Person';
import React from 'react'
import { people } from '../data'


const List = () => {
  return <div>
    {people.map((person) => {
        return <Person person={person}/>
    })}
    </div>
}

export default List