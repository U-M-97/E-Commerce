import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive' 
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    font-size: 50px;
    color: white;
    font-weight: bold;

`

const Button = styled.button`
    padding: 10px;
    font-size: large;
    cursor: pointer;
    border: none;
    background-color: white;
    color: gray;
    text-transform: uppercase;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
            <Image src={item.image}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem