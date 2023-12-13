import React from 'react'

const Form = () => {
  return (
    <form className='form'>
        <div className='form-row'>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' />
        </div>
        <div className='form-row'>
            <label htmlFor="username">Username:</label>
            <input type="text" id='username' />
        </div>
        <div className='form-row'>
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' />
        </div>
        <div className="form-row">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" />
        </div>
        <div className='form-row'>
            <label htmlFor="zipcode">Zipcode:</label>
            <input type="text" id='zipcode' />
        </div>
        <div className='form-row'>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id='phone' />
        </div>
    </form>
  )
}

export default Form