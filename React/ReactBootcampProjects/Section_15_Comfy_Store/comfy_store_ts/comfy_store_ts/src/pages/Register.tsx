import React from 'react'

import { FormInput, SubmitBtn } from '../components'
import {Form, Link} from "react-router-dom";

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
        <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
            <h4 className='text-center text-3xl font-bold'>
                Register
            </h4>
            <FormInput label='username' name='username' type='text' defaultValue={''}/>
            <FormInput label='email' name='email' type='email' defaultValue={''}/>
            <FormInput label='password' name='password' type='password' defaultValue={''}/>
            <div className='mt-4'>
                <SubmitBtn text='register'/>
            </div>
            <p className="text-center">
                Already a member?
                <Link to='/login' className='ml-2 link link-hover link-primary capitalize'>
                    Login
                </Link>
            </p>
        </Form>
    </section>
  )
}

export default Register