import React, { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { data } from '../data/data'
import { IPeople } from '../models/models';
import { randomInt } from 'crypto';

// inputs must have name attribute

const UserChallenge = () => {
  
    const [name,setName] = useState('');
    const [users, setUsers] = useState<IPeople[]>(data);

    const [user, setUser] = useState<IPeople>({id: 10,name:'',email:'',password:''});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
    }

    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
        if(!user.name) return;
        const updatedUsers = [...users];
        updatedUsers.push(user);
        setUsers(updatedUsers);
        // if(!name) return;
        // const fakeId = Date.now();
        // const newUser:IPeople = {user.};
        // console.log(newUser);
        // const updatedUsers = [...users];
        // updatedUsers.unshift(newUser);
        // setUsers(updatedUsers);
        clearFields();
    }   

    const clearFields = () => {
        user.name = '';
        user.email = '';
        user.password = '';
    }

    const removeUser = (id:number) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
    }


    return (
    <div className='wrapper'>
        <form className="form" onSubmit={handleSubmit}>
            <h4>Add User</h4>
            <div className="form-row">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input type="text" className='form-input' id='name' value={user.name} name='name' onChange={handleChange}/>
            </div>
            {/*email*/}
            <div className="form-row">
                <label htmlFor="email" className='form-label'>
                    Email
                </label>
                <input type="email" className='form-input' id='email' value={user.email} name='email' onChange={handleChange} />
            </div>
            {/*password*/}
            <div className="form-row">
                <label htmlFor="" className='form-label'>
                    Password
                </label>
                <input type="password" className='form-input' value={user.password} name='password' onChange={handleChange}/>
            </div>

            <button type='submit' className='btn btn-block'>Submit</button>
        </form>
        {/*render users below*/}
        <h4>Users</h4>
        {users.map((user) => {
            return <div key={user.id}>
                <h4>{user.name}</h4>
                <button onClick={() => {removeUser(user.id)}} className='btn btn-block'>remove</button>
            </div>
        })}
    </div>
  )
}

export default UserChallenge