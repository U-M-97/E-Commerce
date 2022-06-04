import React from 'react'
import Topbar from './components/topbar/topbar'
import Sidebar from './components/sidebar/sidebar'
import "./App.css"
import Home from './pages/home/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/userList"
import User from './pages/User/user'
import NewUser from './pages/newUser/newUser'
import ProductList from './pages/Productlist/productList'
import Product from './pages/products/product'
import NewProduct from "./pages/newProduct/newProduct"
import Login from './pages/Login/login'
import { useSelector } from "react-redux" 
import { Navigate } from 'react-router-dom'
import {user} from "./redux/userRedux"
import { useState, useEffect } from "react"

const App = () => {

    const token = useSelector(user)
    //console.log(token.others.isAdmin)
    const [admin ,setAdmin] = useState("")
    
    useEffect(() => {
        if(token){
            token.others.isAdmin ? setAdmin(true) : setAdmin(false)
        }
    },[])

    console.log(admin)

  return (
      <BrowserRouter>
      {/* <Routes>
         <Route path="/" element={<Login/>}/>
      </Routes> */}
      {
        admin ? (
            <>
                <Topbar/>
                <div className='container'>
                    <Sidebar/>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/users" element={<UserList/>}></Route>
                        <Route path="/user/:userId" element={<User/>}></Route>
                        <Route path="/newUser" element={<NewUser/>}></Route>
                        <Route path="/products" element={<ProductList/>}></Route>
                        <Route path="/product/:productId" element={<Product/>}></Route>
                        <Route path="/newProduct" element={<NewProduct/>}></Route>
                        {/* <Route path="/login" element={ admin ? <Navigate to="/"/>:<Login/>}></Route> */}
                    
                    </Routes>
                </div> 
            </>
        ) : (
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
           
        )
      }                                                                 
      </BrowserRouter>
  )
}

export default App