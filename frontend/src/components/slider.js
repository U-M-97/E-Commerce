import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styled from 'styled-components'
import {useState} from 'react'
import {items} from './data'
import { mobile } from "../responsive";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`

const Arrow = styled.div`
    background-color: gray;
    color: white;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    margin: auto;
    opacity: 0.3;
    z-index: 2;
`

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
`
const Image = styled.img`
    height: 80%;
    margin-top: 20px;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500px;
    letter-spacing: 3px;
`

const Button = styled.button`
    background-color: transparent;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
`

const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.bg};
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.index * -100}vw);
    transition: all 1.5s ease;
`  

const Slider = () => {

    const [index, setIndex] = useState(0)
    const handleClick = (direction) =>{
        if(direction === "left"){
            setIndex(index > 0 ? index - 1 : 2)
        }else{
            setIndex(index < 2 ? index + 1 : 0)
        }
    }


  return (
    <Container>
        <Arrow direction = "right" onClick={()=> handleClick("right")}>
            <ArrowForwardIosIcon/>
        </Arrow>
        <Arrow direction = "left" onClick={() => handleClick("left")}>
            <ArrowBackIosNewIcon/>
        </Arrow>
        
        <Wrapper index = {index}>
            {items.map((item)=>[
                <Slide bg = {item.bg}>
                <ImageContainer>
                    <Image src={item.image}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Button>Shop Now</Button>
                </InfoContainer>
                </Slide>
            ])}  
        </Wrapper>

  
 
    </Container>
  )
}

export default Slider