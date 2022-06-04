import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicReq } from '../requestMethod';
import { addProduct } from '../redux/cartRedux' 
import { useDispatch } from 'react-redux' 

const Container = styled.div`
    display: flex;
    margin: 20px;
    padding: 50px;
    ${mobile({ padding: "10px", flexDirection:"column" })}
`

const ImageContainer = styled.div`
    flex: 1;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    ${mobile({ height: "40vh" })}
`

const Title = styled.h1`
    font-weight: 200px;
    font-size: 50px;
    margin: 0;
`
const Des = styled.p`
    font-size: 20px;
`

const Price = styled.h3`
    font-size: 50px;
`

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    ${mobile({ width: "100%" })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    margin-right: 30px;
`
const FilterTitle = styled.h3`
    font-size: 20px;
    font-weight: 200px;
    margin-right: 10px;
`

const Color = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${(props)=>props.color};
    border-radius: 50%;
    margin-left: 5px;
    cursor: pointer;
`
const FilterOption = styled.select`
    padding: 5px;

`

const Size = styled.option`
    
`

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`

const Button = styled.button`
    border: 2px solid pink;
    width: 150px;
    padding: 15px;
    background: transparent;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover{
        background-color: lightpink;
        border: 2px solid black;
    }
`




const Product = () => {

    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [col, setCol] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()

    useEffect(() =>{
        const getProduct = async ()=>{
            try{
              const res = await publicReq.get("/products/find/" + id)
              setProduct(res.data)
            }catch (err){
                console.log(err)
            }
          }
          getProduct()
    }, [id])

    console.log(size)
    console.log(col)

    const handleQuantity = (type) => {
        if(type === "decrease"){
            quantity > 1 && setQuantity(quantity - 1)
        } else{
            setQuantity(quantity + 1)
        } 
    }  

    const handleCart = () =>{
        dispatch(
            addProduct({ ...product, quantity, col, size})
        )
    }

        return (
            <div>
                <Announcement/>
                <Navbar/>
                <Container>
                    <ImageContainer>
                        <Image src={product.img}></Image>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Des>{product.description}</Des>
                        <Price>{product.price}</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color</FilterTitle>
                                {product.color?.map((c) =>{
                                    return(
                                        <Color color={c} key={c} onClick={() => setCol(c)}/>
                                    )               
                                })}
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterOption onClick={(e) => setSize(e.target.value)}>
                                    {product.size?.map((s) => {
                                        return(
                                            <Size key={s}>{s}</Size>   
                                        )
                                    })}
                                </FilterOption>                              
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <RemoveIcon onClick={() => handleQuantity("decrease")}/>
                                <Amount>{quantity}</Amount>
                                <AddIcon onClick={() => handleQuantity("increase")}/>
                            </AmountContainer>
                            <Button onClick={handleCart}>Add to Cart</Button>
                        </AddContainer>
                    </InfoContainer>
                </Container>
            </div>
          )


  
}

export default Product