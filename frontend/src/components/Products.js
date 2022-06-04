import React from 'react'
// import {products} from './data'
import ProductItems from './ProductItems'
import styled from 'styled-components'
import { useState, useEffect} from 'react'
import axios from "axios"

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {

  const [ products, setProducts] = useState([])
  const [ filteredProducts, setFilteredProducts] = useState([])

  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await axios.get(
          cat ? `http://localhost:5000/api/products?category=${cat}`
          : "http://localhost:5000/api/products"
        )
        setProducts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getProducts()
  }, [cat])

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter((item)=>{
        return(
          Object.entries(filters).every(([key,value])=>{
            return(
              item[key].includes(value)
              
            )
          })
        )
      })
    )
    console.log(filteredProducts)
  }, [products, cat, filters])

  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProducts((prev)=>{
        return(
          [...prev].sort((a,b) => a.createdAt - b.createdAt)
        )
      })
    }

    else if(sort === "asc"){
      setFilteredProducts((prev)=>{
        return(
          [...prev].sort((a,b) => a.price - b.price)
        )  
      })
    }

    else if(sort === "desc"){
      setFilteredProducts((prev)=>{
        return(
          [...prev].sort((a,b) => b.price - a.price)
        )
      })
    }
  }, [sort])

  return (
    <Container>
      {
        cat ? filteredProducts.map((item)=>{
          return( 
              <ProductItems item={item} key={item.id}/>
          )
      }) 
      : products.slice(0, 8).map((item) => {
        return(
          <ProductItems item ={item} key={item.id}/>
        )
      })
      }
        
    </Container>
  )
}

export default Products