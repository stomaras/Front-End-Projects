import React, { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { data } from '../data/data'
import { IPeople } from '../models/models';

const UserChallenge = () => {
  
    const [name,setName] = useState('');
    const [users, setUsers] = useState<IPeople[]>(data);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!name) return;
        const fakeId = Date.now();

        const newUser = {id:fakeId, name};
        const updatedUsers = [...users];
        updatedUsers.unshift(newUser);
        setUsers(updatedUsers);
        console.log('form submitted');
    }   


    return (
    <div>
        <form className="form" onSubmit={handleSubmit}>
            <h4>Add User</h4>
            <div className="form-row">
                <label htmlFor="name" className="form-label">
                    name
                </label>
                <input type="text" className='form-input' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <button type='submit' className='btn btn-block'>Submit</button>
        </form>
        {/*render users below*/}
        <h4>users</h4>
        {users.map((user) => {
            return <div key={user.id}>{user.name}</div>
        })}
    </div>
  )
}

export default UserChallenge