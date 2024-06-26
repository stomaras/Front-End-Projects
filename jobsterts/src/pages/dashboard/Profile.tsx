import React from 'react'
import { useState } from 'react'
import { FormRow } from '../../components'
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useDispatch, useSelector } from 'react-redux';
import { User, userSelector } from '../../features/user/userSlice';
import { useAppSelector } from '../../features/hooks';
import { toast } from 'react-toastify';


const Profile = () => {

    const {isLoading, user} = useAppSelector(userSelector);
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        name:user?.name || '',
        email:user?.email || '',
        lastName: user?.lastName || '',
        location: user?.location || '',
    });

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {name, email, lastName, location} = userData;
        if(!name || !email || !lastName || !location){
            toast.error('please fill out all fields')
            return;
        }
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({...userData, [name]:value});
    }

  return (
    <Wrapper>
        <form className='form' onSubmit={handleSubmit}>
            <h3>profile</h3>
            <div className="form-center">
                <FormRow type="text" name='name' value={userData.name} handleChange={handleChange}/>
                <FormRow type="text" name='lastName' value={userData.lastName} handleChange={handleChange}/>
                <FormRow type="text" name='email' value={userData.email} handleChange={handleChange}/>
                <FormRow type="text" name='location' value={userData.location} handleChange={handleChange}/>
                <button type='submit' className='btn btn-block' disabled={isLoading}>
                    {isLoading ? 'Please Wait':'save changes'}
                </button>
            </div>
        </form>
    </Wrapper>
  )
}

export default Profile