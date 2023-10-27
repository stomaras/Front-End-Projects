import React, { useState } from 'react'

const ControlledInputs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newUser = Object.fromEntries(formData);

        console.log(e.currentTarget);

        e.currentTarget.reset();
    }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <h4>controlled inputs</h4>
        <div className="form-row">
            <label htmlFor="name" className="form-label">
                name
            </label>
            <input type="text" className='form-input' id='name' name='name' onChange={handleChange}/>
        </div>
        <div className="form-row">
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input type="email" className='form-input' id='email' name='email' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-row">
            <label htmlFor="password" className="form-label">
                Password
            </label>
            <input type="password" className='form-input' id='password' name='password' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button type='submit' className='btn btn-block'>
            Submit
        </button>
    </form>
  )
}

export default ControlledInputs