import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/announcement'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import { mobile } from "../responsive";
import { useLocation } from 'react-router'
import { useState } from 'react'


const Title = styled.h1`
    margin: 20px;
    font-weight: bold;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
   
`

const Filter = styled.div`
     margin: 20px;
     ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option`

`

const ProductList = () => {

    const location = useLocation()
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) =>{
        const value = e.target.value
        setFilters({...filters, [e.target.name]: value})
    }
    // console.log(filters)
    // console.log(sort)

  return (
      <div>
        <Announcement/>
        <Navbar/>
        <Title>Products</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled>Color</Option>
                    <Option>Blue</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Green</Option>
                    <Option>yellow</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled>Size</Option>
                    <Option>XL</Option>
                    <Option>L</Option>
                    <Option>M</Option>
                    <Option>S</Option>
                </Select>
            </Filter>

            <Filter>
                <FilterText>Sort By</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value = "newest">High to Low Price</Option>
                    <Option value = "asc">Low to High Price</Option>
                    <Option value = "desc">New Arrivals</Option>
                </Select>
            </Filter>
            
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <NewsLetter/>
        <Footer/>
      </div>
    
  )
}

export default ProductList