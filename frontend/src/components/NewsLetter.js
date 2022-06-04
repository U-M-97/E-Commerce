import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60vh;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin-top: 20px;
`

const Description = styled.p`
  font-size: 30px;
  margin-top: 0px;
  ${mobile({ textAlign: "center" })}
`
const Info = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
  justify-content: space-between;
  border: 1px solid gray;
  ${mobile({ width: "80%" })}
`
const Input = styled.input`
  outline: none;
  border: none;
  flex: 8;
  padding-left: 20px;
`
const Button = styled.button`
  flex: 2;
  border: none;
  background-color: pink;
  cursor: pointer;
`


const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get updates for your favourite products</Description>
        <Info>
            <Input></Input>
            <Button>
                <SendOutlinedIcon/>
            </Button>
        </Info>
    </Container>
  )
}

export default NewsLetter