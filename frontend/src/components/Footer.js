import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0px;
`

const Icon = styled.div`
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
    }
`

const Title = styled.h1`
   margin-bottom: 10px;
`

const Des = styled.p`
`

const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const Items = styled.li`
    width: 50%;
    margin-bottom: 15px;
    cursor: pointer;

    &:hover{

    }
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    height: 40px;
`


const Footer = () => {
  return (
    
    <Container>
        <Left>
            <Title>E-Commerce</Title>
            <Des>Lorem ipsum dolor sit amet. Sit assumenda officia in nihil explicabo aut consequatur rerum et voluptatem assumenda? Et corrupti vitae et magnam rerum qui quas quam aut cupiditate asperiores quo nulla maxime et quasi ullam qui nobis.</Des>
            <IconContainer>
                <Icon color=' #3b5998'>
                    <FacebookIcon/>
                </Icon>
                <Icon color='  #FD1D1D'>
                    <InstagramIcon/>
                </Icon>
                <Icon color='  #00acee'>
                    <TwitterIcon/>
                </Icon>
                <Icon color=' #0e76a8'>
                    <LinkedInIcon/>
                </Icon>
            </IconContainer>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <Items>Home</Items>
                <Items>Man Fashion</Items>
                <Items>Accessories</Items>
                <Items>Order Tracking</Items>
                <Items>Wishlist</Items>
                <Items>Cart</Items>
                <Items>Woman Fashion</Items>
                <Items>My Account</Items>
                <Items>Contact</Items>
                <Items>Terms</Items>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
             <LocationOnIcon style={{marginRight:"10px"  , transform:"scale(1.2)"}}/>Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401

            </ContactItem>
            <ContactItem>
                <CallIcon style={{marginRight:"10px" , transform:"scale(1.2)"}}/>+92 1234-5678

            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight:"10px"  , transform:"scale(1.2)"}}/>usamamaqsood@gmail.com

            </ContactItem>
            <Payment src="https://pasoroblesdailynews.com/wp-content/uploads/2018/03/payments.png"/>
        </Right>
    </Container>

  )
}

export default Footer