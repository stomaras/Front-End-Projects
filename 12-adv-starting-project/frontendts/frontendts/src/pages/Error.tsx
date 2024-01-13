import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';

export interface CustomError {
    title:string;
    message:string;
}

const Error = () => {

    const error = useRouteError() as any;

    const customError:CustomError= {
        title: '',
        message: ''
    }
    if(error.status === 500) {
        customError.message =JSON.parse(error.data).message;
    } 

    if(error.status === 404) {
        customError.title = 'Not found!'
        customError.message = 'Could not find resource or page.'
    }

  return (
    <>
        <MainNavigation/>
        <PageContent title={customError.title}>
        <p>{customError.message}</p>
        </PageContent>
    </>

  )
}

export default Error