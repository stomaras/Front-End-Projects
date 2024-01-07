import React, { useState } from 'react'
import { Logo } from '../components'
import Wrapper from "../assets/wrappers/RegisterPage";
import FormRow from '../components/FormRow';
import {toast} from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, store } from '../features/store';
import { useAppSelector } from '../features/hooks';
import { loginUser, registerUser, userSelector } from '../features/user/userSlice';

export interface RegisterState {
    name:string;
    email:string;
    password:string;
    isMember:boolean;
}

const initialState:RegisterState = {
    name:'',
    email:'',
    password:'',
    isMember:true,
}


const Register = () => {

    const [values, setValues] = useState(initialState);

    const {user, isLoading} = useAppSelector(userSelector)
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values,[name]:value})        
    }

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {name, email, password, isMember} = values;
        if(!email || !password || (!isMember && !name)){
            console.log('ds');
            toast.error('Please fill out all fields');
        }
        if(isMember){
            dispatch(loginUser({email:email, password:password}))
            return;
        }
        dispatch(registerUser({name:name, email:email, password:password}))
    }

    const toggleMember = () => {
        setValues({...values, isMember:!values.isMember})
    }

  return (
    <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
            <Logo/>
            <h3>{values.isMember ? 'Login' : 'Register'}</h3>
            {/*name field*/}
            {!values.isMember && (
                <FormRow type="text" name="name" value={values.name} handleChange={handleChange}/>
            )}
            {/*email field*/}
            <FormRow type="email" name="email" value={values.email} handleChange={handleChange}/>
            {/*password field*/}
            <FormRow type="password" name="password" value={values.password} handleChange={handleChange}/>

            <button type='submit' className='btn btn-block' disabled={isLoading}>
                {isLoading ? 'loading...':'submit'}
            </button>
            <p>
                {values.isMember ? 'Not a member yet?':'Already a member?'}
                <button type='button' onClick={toggleMember} className='member-btn'>{values.isMember? 'Register' : 'Login'}</button>
            </p>
        </form>
    </Wrapper>
  )
}

export default Register