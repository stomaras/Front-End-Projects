import React from 'react'
import styled from 'styled-components'
import loginImg from "../images/login-img.svg"

const Login = () => {
  return (
    <Wrapper>
        <div className='container'>
            <img src={loginImg} alt="github user"/>
            <h1>github user</h1>
            <button className='btn'>login</button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    .container {
        width:90vw;
        max-width: 600px;
        text-align: center;
    }
    img {
        margin-bottom: 2rem;
    }
`

export default Login