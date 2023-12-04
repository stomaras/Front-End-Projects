import React, { useState } from 'react'
import { IStudent } from '../models/models';

export interface FormProps {
    handleSubmit:(student:IStudent) => void;
}

const Form = (props:FormProps) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    const showError = () => {
        setFirstNameError(true);
        setLastNameError(true);
        setEmailError(true);
    }

    const hideError = () => {
        setFirstNameError(false);
        setLastNameError(false);
        setEmailError(false);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(firstName === '' || lastName === '' || email === ''){
            showError();
            let student :IStudent = {
                firstName: '',
                lastName: '',
                email: '',
            }
            props.handleSubmit(student);
        }else {
            hideError();
            let student :IStudent = {
                firstName: firstName,
                lastName: lastName,
                email: email,
            }
            clearForm();
            props.handleSubmit(student);
        }
    }

    const handleChangeFirstName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }

    const handleChangeLastName= (e:React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }

    const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

  return (
    <form onSubmit={handleSubmit} className='form'>
        <legend>Student Form</legend>
        <div className='form-row'>
            <label htmlFor="firstName">firstName</label>
            <input type="text" name='firstName' id='firstName' onChange={handleChangeFirstName} value={firstName}/>
        </div>
        {firstNameError && <span className='error-span'>This Field is required</span>}
        <div className="form-row">
            <label htmlFor="lastName">lastName</label>
            <input type="text" name='lastName' id='lastName' onChange={handleChangeLastName} value={lastName}/>
        </div>
        {lastNameError && <span className='error-span'>This Field is required</span>}
        <div className="form-row">
            <label htmlFor="email">email</label>
            <input type="email" name='email' id='email' onChange={handleChangeEmail} value={email}/>
        </div>
        {emailError && <span className='error-span'>This Field is required</span>}
        <button type='submit' className='save_button'>save</button>
    </form>
  )
}

export default Form