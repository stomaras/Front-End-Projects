import React from 'react'

export interface PersonProps {
    name:string;
}

const Person = (props: PersonProps) => {
    console.log("render");
    const {name} = props;
  return (
    <div>
        <h4>
            {name}
        </h4>
    </div>
  )
}

export default Person