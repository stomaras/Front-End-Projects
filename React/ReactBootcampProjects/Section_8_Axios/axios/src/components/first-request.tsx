import React, { useEffect } from 'react'
import axios from 'axios';
import { useCallback } from 'react';

const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {

    const fetchData = async () => {
        try{
            const response = await axios(url, {
                headers: {
                    Accept: 'applications/json',
                },
            });
            console.log(response);
            const data = response.data;
        }catch(error:any){
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    },[]);


  return (
    <h2 className='text-center'>first request</h2>
  )
}

export default FirstRequest