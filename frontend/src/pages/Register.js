import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

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
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
`

const Div = styled.div`
    background-color: white;
    padding: 20px;
    width: 30%;
    ${mobile({ width: "75%" })}
`

const Title = styled.h1`
    
`
const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    
`
const Input = styled.input`
    padding: 10px;
    margin: 10px 0;
    outline: none;
`

const Button = styled.button`
    padding: 10px;
    width: 35%;
    background-color: pink;
    border: 1px solid black;
    cursor: pointer;
    margin: 10px 0;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
`


const Register = () => {
  return (
    <Container>
        <Div>
            <Title>Create An Account</Title>
            <InputDiv>
                <Input placeholder = "Username"></Input>
                <Input placeholder = "Email"></Input>
                <Input placeholder = "Password"></Input>
                <Input placeholder = "Confirm Password"></Input>
            </InputDiv>
            <Button>Create</Button>
        </Div>
    </Container>
  )
}

export default Register