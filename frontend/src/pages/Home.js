import React from 'react'
import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import Slider from '../components/slider'
import Category from '../components/Category'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
      <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Category/>
        <Products/>
        <NewsLetter/>
        <Footer/>
      </div>
      
  )
}

export default Home