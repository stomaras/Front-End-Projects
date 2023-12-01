import React from 'react'
import { ActionFunction } from 'react-router-dom';
import {Form} from "react-router-dom";

export const action:ActionFunction = async ({request}) => {
  console.log(request);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return null;
}


const Newsletter = () => {
  return (
    <Form className="form" method='POST'>
      <h4 style={{textAlign:'center', marginBottom:"2rem"}}>
        Our NewsLetter
      </h4>
      {/*name*/}
      <div className="form-row">
        <label htmlFor="name" className='form-label'>
          name
        </label>
        <input type="text" className='form-input' name='name' id='name' />
      </div>
      {/*lastName*/}
      <div className="form-row">
        <label htmlFor="lastName" className='form-label'>
          last name
        </label>
        <input type="text" className='form-input' name='lastName' id='lastName' />
      </div>
      {/*email*/}
      <div className="form-row">
        <label htmlFor="email" className='form-label'>
          email
        </label>
        <input type="text" className='form-input' name='email' id='email' />
      </div>
      <button type='submit' className='btn btn-block' style={{marginTop:'0.5rem'}}>
        submit
      </button>
    </Form>
  )
}

export default Newsletter