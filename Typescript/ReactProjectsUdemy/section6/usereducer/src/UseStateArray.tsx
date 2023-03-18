import React from 'react'
import { data } from "./data";
import { people } from "./data";
import { Person } from './data';

const UseStateArray = () => {
    const [people, setPeople] = React.useState<any>(data);

    const removeItem = (id: number) => {
        let newPeople = people.filter((person: Person) => person.id !== id);
    }

  return (
      <div>
          
          {people.map((person: any) => {
              const {id, name} = person
              // console.log(person);
              return <div key={id}>
                  <h4>{name}</h4>
              </div>;  
          })}
    </div>
  )
}

export default UseStateArray