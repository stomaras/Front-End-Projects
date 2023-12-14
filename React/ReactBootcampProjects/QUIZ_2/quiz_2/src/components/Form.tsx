import React, { useEffect, useState } from 'react'
import { IUsers } from '../models/models';
import "react-toastify/ReactToastify.css"
import { ToastContainer, toast } from 'react-toastify';

export interface FormProps {
    handleSubmit:(user:IUsers) => void;
}

const Form = (props:FormProps) => {

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');   
    
    const [nameError, setNameError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [zipCodeError, setZipCodeError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);


    const handleName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleUsername = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }

    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleZipCode = (e:React.ChangeEvent<HTMLInputElement>) => {
        setZipCode(e.target.value);
    }

    const handleCity = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    const handlePhone = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }

    const checkName = (name:string) => {
        if(name === '' || name.length <= 5){
            setNameError(true);
        }else {
            setNameError(false);
        }
    }
    const checkUserName = (userName:string) => {
        if(userName === '' || userName.length <= 5){
            setUserNameError(true);
        }else {
            setUserNameError(false);
        }
    }

    const checkEmail = (email:string) => {
        if(email.includes("@")){
            setEmailError(false);
        }else {
            setEmailError(true);
        }
    }

    const checkCity = (city:string) => {
        if(city === ''){
            setCityError(true);
        }else {
            setCityError(false);
        }
    }

    const checkZipCode = (zipCode:string) => {
        if(zipCode === '') {
            setZipCodeError(true);
        }else {
            setZipCodeError(false);
        }
    }

    const checkPhone = (phone:string)=> {
        if(phone === '') {
            setPhoneError(true);
        }else {
            setPhoneError(false);
        }
    }

    useEffect(() => {
        checkName(name);
        checkUserName(userName);
        checkEmail(email);
        checkCity(city);
        checkZipCode(zipCode);
        checkPhone(phone);
    },[name, userName, email, city, zipCode, phone])

    const hideError = () => {
        setNameError(false);
        setCityError(false);
        setUserNameError(false);
        setEmailError(false);
        setZipCodeError(false);
        setPhoneError(false);
    }

    const clearForm = () => {
        setName('');
        setUserName('');
        setEmail('');
        setCity('');
        setPhone('');
        setZipCode('');
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(nameError || userNameError || emailError || zipCodeError || phoneError || phoneError){
            toast.error('Try Again');
        }else {
            hideError();
            let user:IUsers = {
                id: 0,
                name: name,
                username: userName,
                email: email,
                address: {
                    street: '',
                    suite: '',
                    city: city,
                    zipcode: zipCode,
                    geo: {
                        lat: '',
                        lng: ''
                    }
                },
                phone: phone,
                website: '',
                company: {
                    name: '',
                    catchPhrase: '',
                    bs: ''
                }
            }
            console.log("error",user);
            props.handleSubmit(user);
            clearForm();
        }
    }


  return (
    <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' onChange={handleName} value={name}/>
        </div>
        {nameError && <span className='error-span'>Name Should me more than 5 characters</span>}
        <div className='form-row'>
            <label htmlFor="username">Username:</label>
            <input type="text" id='username' onChange={handleUsername} value={userName}/>
        </div>
        {userNameError && <span className='error-span'>Username should be more than 5 characters</span>}
        <div className='form-row'>
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' onChange={handleEmail} value={email}/>
        </div>
        {emailError && <span className='error-span'>Email Should Include @</span>}
        <div className="form-row">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" onChange={handleCity} value={city}/>
        </div>
        {cityError && <span className='error-span'>You must add a city</span>}
        <div className='form-row'>
            <label htmlFor="zipcode">Zipcode:</label>
            <input type="text" id='zipcode' onChange={handleZipCode} value={zipCode}/>
        </div>
        {zipCodeError && <span className='error-span'>Zip code must only be digits or a hyphen</span>}
        <div className='form-row'>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id='phone' onChange={handlePhone} value={phone}/>
        </div>
        {phoneError && <span className='error-span'>You must add a phone number</span>}
        <button type='submit'>Add</button>
    </form>
  )
}

export default Form