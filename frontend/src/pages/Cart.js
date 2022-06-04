import React from 'react'
import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Footer from '../components/Footer';
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { userReq } from '../requestMethod';

const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div`
  
`
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  ${mobile({ display: "none" })}
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const TopButton = styled.button`
  padding: 10px;
  background-color: transparent;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
  color: ${(props)=> props.type === "filled" ? "white" : "black"};
  text-transform: uppercase;
  width: 12%;
  cursor: pointer;
`
const LinkContainer = styled.div`
  
  
`
const Link = styled.a`
  text-decoration: underline;
  margin: 0px 10px;
  cursor: pointer;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0%;
  ${mobile({ flexDirection: "column" })}
`
const Details = styled.div`
  display: flex;
  flex: 2;
`

const Image = styled.img`
  height: 200px;
  width: 200px;
`
const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  margin-left: 40px;
`

const ProductName = styled.span`
  font-size: large;
`

const ProductID = styled.span`
  font-size: large;
`

const ProductColor = styled.div`
  background-color: ${(props)=> props.color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`

const ProductSize = styled.span`
  font-size: large;
`

const Price = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const Amount = styled.div`
  margin: 0 10px;
`

const PriceAmount = styled.h1`

`

const HR = styled.hr`
  background-color: black;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 1px solid gray;
  border-radius: 10px;
  height: 50vh;
  padding: 20px;
`

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  font-size: ${(props)=> props.type === "total" && "25px"};
  font-weight: ${(props) => props.type === "total" && "bold"};
`

const SummaryText = styled.span`

`

const SummaryPrice = styled.span`

`

const Button = styled.button`
  padding: 15px;
  width: 100%;
  background-color: black;
  color: white;
  border: none;
  text-transform: uppercase;
  font-size: large;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    background-color: pink;
    color: black;
  }
`


const Cart = () => {
  
  const cart = useSelector((state) => state.cart)
  const [ stripeToken, setStripeToken ] = useState(null)
  const navigate = useNavigate()
  console.log(KEY)
  
  const onToken = (token) =>{
    setStripeToken(token)
  }
  console.log(stripeToken)

  useEffect(() =>{
    const makeRequest = async () =>{
      try{
        const res = await userReq.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500 
        })
        navigate("/success")
      }catch(err)
      {
        console.log(err)
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken, cart.total, navigate])

  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <LinkContainer>
                  <Link>Shopping Bag</Link>
                  <Link>Wishlist</Link>
                </LinkContainer>
                <TopButton type="filled">CheckOut</TopButton>
            </Top>
            
            <Bottom>
                <Info>
                  {cart.products.map((product)=>{
                    return(

                  <Product>
                    <Details>
                      <Image src={product.img}></Image>
                      <ProductDetails>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductID>
                          <b>ID:</b> {product._id}
                        </ProductID>
                        <ProductColor color = {product.color}/>
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                      </ProductDetails>
                      </Details>
                      <Price>
                        <AmountContainer>
                          <RemoveIcon/>
                          <Amount>{product.quantity}</Amount>
                          <AddIcon/>
                        </AmountContainer> 
                        <PriceAmount>{product.price * product.quantity}</PriceAmount>
                      </Price>
                      <HR></HR> 
                  </Product>      
                  )
                })}
                </Info>
                <Summary>
                    <Title>Order Summary</Title>
                    <SummaryItem>
                      <SummaryText>Subtotal</SummaryText>
                      <SummaryPrice>$ {cart.total}</SummaryPrice>
                    </SummaryItem>
                    
                    <SummaryItem>
                      <SummaryText>Estimated Shipping</SummaryText>
                      <SummaryPrice>$ 10</SummaryPrice>
                    </SummaryItem>
                    
                    <SummaryItem>
                      <SummaryText>Discount</SummaryText>
                      <SummaryPrice>5 %</SummaryPrice>
                    </SummaryItem>

                    <SummaryItem type="total">
                      <SummaryText>Total</SummaryText>
                      <SummaryPrice>$ {cart.total}</SummaryPrice>
                    </SummaryItem>
                     <StripeCheckout
                      name="E-Commerce"
                      billingAddress
                      shippingAddress
                      description={ `Your total is $${cart.total}`}
                      amount={cart.total * 100}
                      token={onToken}
                      stripeKey={KEY}
                      >
                      <Button>Checkout Now</Button>
                  </StripeCheckout>
                    

                </Summary>
            </Bottom>
        </Wrapper>
        
        <Footer/>
    </Container>
    
  )
}

export default Cart