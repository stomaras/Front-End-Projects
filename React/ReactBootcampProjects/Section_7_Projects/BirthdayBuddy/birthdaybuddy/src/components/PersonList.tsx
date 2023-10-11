import React from 'react'
import persons from '../data'
import { IPerson } from '../models/models'
import Person from './Person';

export interface PersonListProps {
    persons: IPerson[];
}

const PersonList = (props: PersonListProps) => {
    const {persons} = props;
    return <>
        {persons.map((person) => {
                return (
                <li key={person.id} className='person-li'>
                    <Person img={person.image} name={person.name} age={person.age}/>
                </li>
            )
        })}      
    </>

}

export default PersonList