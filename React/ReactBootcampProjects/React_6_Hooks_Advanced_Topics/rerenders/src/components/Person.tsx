import React from 'react'

export interface PersonProps {
    name:string;
    removePerson:(id:number) => void;
    id:number;
}

const Person = (props: PersonProps) => {
    console.log("render");
    const {name} = props;
  return (
    <div>
        <h4>
            {name}
        </h4>
        <button onClick={() => props.removePerson(props.id)}>remove</button>
    </div>
  )
}

export default Person