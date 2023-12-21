import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
        <div>
            <h1>404</h1>
            <h3>Sorry , the page you tried cannot be found</h3>
            <Link to="/" className='btn'>back home</Link>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: grid;
    place-items: center;
    background: #0d989a;
    min-height: 100vh;
    min-width: 320px;
    text-align: center;
    h1 {
        font-size: 5rem;
    }
    h3 {
        margin-bottom: 1.5rem;
    }
    .btn {
        background-color: #04954c;
        color: #f3f7f5;
        padding: 1rem;
        border-radius: 1rem;
    }

`

export default Error