import React from 'react'
import { Navigate } from 'react-router-dom'
import { userSelector } from '../features/user/userSlice';
import { useAppSelector } from '../features/hooks'

export interface ProtectedRouteProps {
    children:React.ReactNode;
}

const ProtectedRoute = ({children}:ProtectedRouteProps) => {

    const {user} = useAppSelector(userSelector)

    if(!user) {
        return <Navigate to='/landing'/>
    }
    return children;
}

export default ProtectedRoute