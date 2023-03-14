import React from 'react'
import { useState } from 'react'

/*
- a great solution when you have bunch of inputs
- inputs must have name attribute
*/

const UncontrolledInputs = () => {
    const [value, setValue] = useState(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // console.log(formData);
        // const email = formData.get('email');
        // console.log([...formData.entries()]);
        const newUser = Object.fromEntries(formData);
        console.log(newUser);
        e.currentTarget.reset();
    };



  return (
      <div>
          <form className='form' onSubmit={handleSubmit}>
              <h4>Form Data API</h4>
              <div className='form-row'>
                  <label htmlFor="name" className='form-label'>
                      name
                  </label>
                  <input type="text" className='form-input' id='name' name='name'/>
              </div>
              <div className='form-row'>
                  <label htmlFor="email" className='form-label'>
                      Email
                  </label>
                  <input type="email" className='form-input' id='email' name='email' />
              </div>
              <div className='form-row'>
                  <label htmlFor="password" className='form-label'>
                      Password
                  </label>
                  <input type="password" className='form-input' id='password' name='password' />
              </div>
              <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default UncontrolledInputs