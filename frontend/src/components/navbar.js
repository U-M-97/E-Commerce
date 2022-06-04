import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import {mobile} from "../responsive"
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  margin: 0px 20px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ height: "50px", padding:"10px 0px" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`

const Language = styled.label`
  font-size: large;
  font-weight: bold;
  cursor: pointer;
  ${mobile({ display: "none"})}
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  border: 1px solid lightgray;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "10px" })}
`
const RegLog = styled.div`
  font-size: medium;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
      <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'></Input>
            <SearchIcon style={{color: "gray", fontSize: 16}}></SearchIcon>
          </SearchContainer>
      </Left>
      
      <Center>
        <Logo>E-Commerce</Logo>
      </Center>

      <Right>
        <RegLog >REGISTER</RegLog>
        <RegLog>
        <Link to="/login" style={{ textDecoration: 'none' }}>LOGIN</Link>
        </RegLog>
        <RegLog>
          <Link to = "/cart" style={{ textDecoration: 'none' }}>
          <Badge badgeContent={quantity} color="primary">
          <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
          </Badge>
          </Link>
        </RegLog>
      </Right>
    </Container>
  )
}

export default Navbar