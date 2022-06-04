import React from 'react'
import "./login.css"
import { useState} from "react"
import {useDispatch} from "react-redux"
import { login } from '../../redux/apiCalls'


const Login = () => {

  const [username , setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleClick = (e) =>{
    e.preventDefault()
    login(dispatch, {username, password})
    console.log(username, password)
  }

  return (
    <div className='login'>
        <div className='loginWrapper'>
            <h1 className='loginTitle'>Login</h1>
            <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)}></input>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
            <button className='loginButton' onClick={handleClick}>Login</button>
        </div>
    </div>
  )
}

export default Login