import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(0,0,0,0.2);
  transition: all ease 0.5s;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`

const Image = styled.img`
  height: 50%;
  z-index: 2;
`

const Icon = styled.div`
  background-color: white;
  margin: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover{
    background-color: black;
    color: white;
    transform: scale(1.3);
  }
`

const ProductItems = ({item}) => {

  return (
    <Container>
        <Image src = {item.img}/>
        <Info>
          <Icon>
            <ShoppingCartIcon/> 
          </Icon>
          <Icon>
          <Link to={`/product/${item._id}`}>
           <SearchIcon/>
           </Link>
          </Icon>
          <Icon>
            <FavoriteIcon/>
          </Icon>  
        </Info>
    </Container>
  )
}

export default ProductItems