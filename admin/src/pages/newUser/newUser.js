import React from 'react'
import "./newUser.css"
import { useState } from "react"
import { addUser } from '../../redux/apiCalls'
import { useDispatch } from "react-redux"
import axios from 'axios'

const NewUser = () => {

    const [inputs, setInputs] = useState({})
    const [file, setFile] = useState([null])
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputs((prev) => {
            return(
                {...prev, [e.target.name]: e.target.value}
            )
        })
    }
    console.log(inputs, file)

    const handleClick = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "upload")

        try{
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/codillionaire/image/upload", data
            )

            const {url} = uploadRes.data
            const user = {...inputs, img:url}
            addUser(user, dispatch)
            console.log(user)
        }catch(err){
            console.log(err)
        }

        
    }

  return (
    <div className='newUser'>
        <h1 className='newUserTitle'>New User</h1>
        <form className='newUserForm'>

            <div className='newUserItem'>
                <label className='newUserlabel'>Profile Picture</label>
                <input name="img" type="file" id='file' onChange={(e) => setFile(e.target.files[0])}></input>
            </div>

            <div className='newUserItem'>
                <label className='newUserlabel'>Username</label>
                <input name="username" placeholder='Emma' type="text" onChange={handleChange}></input>
            </div>

            <div className='newUserItem'>
                <label className='newUserlabel'>Full Name</label>
                <input placeholder='Emma Watson' type="text" onChange={handleChange}></input>
            </div>

            <div className='newUserItem'>
                <label className='newUserlabel'>Email</label>
                <input name="email" placeholder='emmawatson@gmail.com' type="text" onChange={handleChange}></input>
            </div>

            <div className='newUserItem'>
                <label className='newUserlabel'>Password</label>
                <input name="password" placeholder='Password' type="text" onChange={handleChange}></input>
            </div>

            <div className='newUserItem'>
                <label className='newUserlabel'>Phone</label>
                <input placeholder='+92 332 5562141' type="text" onChange={handleChange}></input>
            </div>

            {/* <div className='newUserItem'>
                <label className='newUserlabel'>Address</label>
                <input placeholder='London | UK' type="text" onChange={handleChange}></input>
            </div> */}

            <div className='newUserItem'>
                <label className='newUserlabel'>Gender</label>
                <div className='newUserGender'>
                    <input type="radio" name="gender" id='male' value="male" onChange={handleChange}/>
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id='female' value="female" onChange={handleChange}/>
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id='other' value="other" onChange={handleChange}/>
                    <label for="other">Other</label>
                </div>
            </div>
            
            <div className='newUserItem'>
                <label className='newUserlabel'>Admin</label>
                    <select name="isAdmin" className='newUserSelect' onChange={handleChange}>
                        <option name="true" value="true">true</option>
                        <option name="false" value="false">false</option>
                    </select>
            </div>
            
            <button className='newUserButton' onClick={handleClick}>Create</button>
        </form>
    </div>
  )
}

export default NewUser