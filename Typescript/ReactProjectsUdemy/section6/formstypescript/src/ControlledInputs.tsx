import React, { ChangeEvent, FormEvent, useState } from 'react'

const ControlledInputs = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>();


    const handleChangeName = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
    }

  return (
      <form className='form' onSubmit={handleSubmit}>
          <h4>controlled inputs</h4>
          <div className='form-row'>
                <label htmlFor="name" className='form-label'>
                  name
              </label>
              <input
                  type="text"
                  className='form-input'
                  id='name'
                  value={name}
                  onChange={handleChangeName}
              />
          </div>
          <div className='form-row'>
              <label htmlFor="email" className='form-label'>
                  Email
              </label>
              <input
                  type="email"
                  className='form-input'
                  id='email'
                  value={email}
                  onChange={handleChangeEmail}
              />
          </div>
          <button type='submit' className='btn btn-block'>
              submit
          </button>
    </form>
  )
}

export default ControlledInputs;