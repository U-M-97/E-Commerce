import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive";
import { login } from "../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
`
const LoginContainer = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-weight: bold;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    padding: 10px;
    margin: 10px 0px;
    outline: none;
`
const Button = styled.button`
    padding: 10px;
    width: 40%;
    margin-top: 10px;
    background-color: transparent;
    border: 3px solid pink;
    font-size: large;
    font-weight: bold;
    cursor: pointer;
    &:disabled{
        color: pink;
        cursor: not-allowed;
    }

    &:hover{
        background-color: pink;
    }
`
const Link = styled.a`
    margin: 5px 0;
    font-size: large;
    text-decoration: underline;
    cursor: pointer;

`

const Error = styled.span`
  color: red;
`;

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { isFetching, error} = useSelector((state) => state.user)

    const handleClick = (e) =>{
        e.preventDefault()
        login(dispatch, {username, password})
    }
    
    console.log(username, password)
  return (
    <Container>
        <LoginContainer>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder = "Username" onChange={(e) => setUsername(e.target.value)}/>
                <Input placeholder = "Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handleClick} disabled={isFetching}>Login</Button>
                {error && <Error>Something went wrong...</Error>}
                <Link>Forgot Password</Link>
                <Link>Create Account</Link>
            </Form>
        </LoginContainer>
    </Container>
  )
}

export default Login