import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import {categories} from './data'
import {mobile} from '../responsive'

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`

const Category = () => {
  return (
    <Container>
      {categories.map((item)=>{
        return(
          <CategoryItem item={item} key={item.id}></CategoryItem>
        )
      })}
    </Container>
  )
}

export default Category