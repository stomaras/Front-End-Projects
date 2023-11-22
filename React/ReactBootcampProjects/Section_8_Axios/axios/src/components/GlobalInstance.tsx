import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'

const productsURL = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {

    const fetchData = async () => {
        try {
            const resp1 = await axios(productsURL);
            const resp2 = await axios(randomUserUrl);
            console.log(resp1);
            console.log(resp2);
        }catch(error){

        }
    }

    useEffect(() => {
        fetchData();
    },[]);

  return (
    <h2 className='text-center'>global instance</h2>
  )
}

export default GlobalInstance