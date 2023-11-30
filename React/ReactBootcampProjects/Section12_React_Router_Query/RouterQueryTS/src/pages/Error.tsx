import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import img from "../assets/not-found.svg";


const Error = () => {

  const error:any = useRouteError();
  if(isRouteErrorResponse(error)){
    if(error.status === 404){
      return (
        <Wrapper>
          <div>
            <img src={img} alt="not found" />
            <h3>Ohh!</h3>
            <p>
              We can not seem to find page you are looking for
            </p>
            <Link to="/">Back Home</Link>
          </div>
        </Wrapper>
      )
    }
    // add additional error handling in case of different status
  }

  return (
    <Wrapper>
      <div>
        <h3>Something Went Wrong!</h3>
      </div>
    </Wrapper>
  )
}

export default Error