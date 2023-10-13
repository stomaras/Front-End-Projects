import React, { useState } from 'react'

const ShortCircuit = () => {

    // falsy
    const [text, setText] = useState('k');

    // truthy
    const [name, setName] = useState("Tom");
    const [user, setUser] = useState({name:'John'});
    const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || 'default value'}</h2>
      {text && ( 
      <div>
        <h2>whatever return </h2>
        <h2>{name}</h2>
      </div>
      )}
      {user && <SomeComponent name={user.name}/>}
      <h2 style={{margin:'1rem 0'}}>Teranry Operator</h2>
      <button className='btn'>{isEditing ? 'edit' : 'add'}</button>
      {user ? (<div>
        <h4>hello there user {user.name}</h4>
      </div>):
      (
        <div>
          <h4>please login</h4>
        </div>
      )}
    </div>
  )
};


interface SomeComponentProps {
  name:string
}

const SomeComponent = (props: SomeComponentProps) => {
  const {name} = props;

  return (
    <div>
      <h2>whatever return</h2>
      <h2>{name}</h2>
    </div>
  )
}

export default ShortCircuit