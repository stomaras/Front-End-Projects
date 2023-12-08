import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import {Form, Link} from "react-router-dom";

export const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
        <Form method='post' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
            <h4 className='text-center text-3xl font-bold'>Login</h4>
            <FormInput 
                label='email' 
                name='identifier' 
                type='email' 
                defaultValue='test@test.com'
            />
            <FormInput
                label='password'
                type='password'
                name='password'
                defaultValue='secret'
            />
            <div className='mt-4'>
                <SubmitBtn text='login'/>
            </div>
            <button type='submit' className='btn btn-secondary btn-block'>guest user</button>
            <p className='text-center'>
                Not a member yet? <Link to='/register' className='ml-2 link link-hover link-primary'>Register</Link>
            </p>
        </Form>
    </section>
  )
}

export default Login