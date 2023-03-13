import React, { FormEvent } from 'react'
import { useState } from 'react'
import { data } from "../src/data";

const UserChallenge = () => {

    const [name, setName] = useState('');
    const [users, setUsers] = useState(data);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!name) return;
        const fakeId = Date.now();
        const newUser = { id: fakeId, name };
        const upDatedUsers = [...users, newUser];
        setUsers(upDatedUsers);
        setName('');
    };

    const removeUser = (id:number) => {
        const upDatedUsers = users.filter((person) => person.id !== id);
        setUsers(upDatedUsers);
    }


  return (
      <div>
          <form className='form' onSubmit={handleSubmit}>
              <h4>Add User</h4>
              <div>
                  <label htmlFor="name" className='form-label'>name</label>
                  <input
                      type="text"
                      className='form-input'
                      id='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <button type='submit' className='btn btn-block'>
                submit
              </button>
          </form>
          <h1>users</h1>
          {users.map((user) => {
              return <div key={user.id}>
                  <h4>{user.name}</h4>
                  <button onClick={()=> removeUser(user.id)} className="btn">remove</button>
              </div>
          })}
    </div>
  )
}

export default UserChallenge