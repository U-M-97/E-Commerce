import React from 'react'
import "./user.css"
import { Link, useLocation } from 'react-router-dom'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import { useSelector } from "react-redux"
import { useState } from "react"

const User = () => {

    const location = useLocation()
    const userId = location.pathname.split("/")[2]
    const [stats, setStats] = useState([])

    const user = useSelector((state) => {
        return(
            state.user.users.find((user) => user._id === userId)
        )
    })

  return (
    <div className='user'>
        <div className='userTitleContainer'>
            <h1 className='userTitle'>Edit User</h1>
            <Link to="/newUser">
                <button className='userCreateButton'>Create</button>
            </Link>
        </div>

        <div className='userContainer'>
            <div className='userShow'>
                <div className='userShowTop'>
                    <img src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' className='userImg'/>
                    <div className='userShowTopTitle'>
                        <span className='userShowUsername'>{user.username}</span>
                        <span className='userShowUserTitle'>Software Engineer</span>
                    </div>
                </div>

                <div className='userShowBottom'>
                    <span className='userShowTitle'>Account Details</span>
                    <div className='userShowInfo'>
                        <AccountBoxOutlinedIcon className='userShowIcon'/>
                        <span className='userShowInfoTitle'>{user.username}</span>
                    </div>

                    <div className='userShowInfo'>
                        <CalendarMonthOutlinedIcon className='userShowIcon'/>
                        <span className='userShowInfoTitle'>25.03.1997</span>
                    </div>
                    <span className='userShowTitle'>Contact Details</span>
                    <div className='userShowInfo'>
                        <LocalPhoneOutlinedIcon className='userShowIcon'/>
                        <span className='userShowInfoTitle'>+92 332 5454422</span>
                    </div>

                    <div className='userShowInfo'>
                        <EmailOutlinedIcon className='userShowIcon'/>
                        <span className='userShowInfoTitle'>{user.email}</span>
                    </div>

                    <div className='userShowInfo'>
                        <LocationOnOutlinedIcon className='userShowIcon'/>
                        <span className='userShowInfoTitle'>London | UK</span>
                    </div>
                </div>
            </div>

            <div className='userUpdate'>
                <h1 className='userUpdateTitle'>Edit</h1>
                <form className='userUpdateForm'>
                    <div className='userUpdateLeft'>
                        <div className='userUpdateItem'>
                            <label>Username</label>
                            <input className='userUpdateInput' placeholder={user.username} type="text"></input>
                        </div>

                        <div className='userUpdateItem'>
                            <label>Full Name</label>
                            <input className='userUpdateInput' placeholder={user.username} type="text"></input>
                        </div>

                        <div className='userUpdateItem'>
                            <label>Email</label>
                            <input className='userUpdateInput' placeholder={user.email} type="text"></input>
                        </div>

                        <div className='userUpdateItem'>
                            <label>Phone</label>
                            <input className='userUpdateInput' placeholder='+92 332 5454422' type="text"></input>
                        </div>

                        <div className='userUpdateItem'>
                            <label>Address</label>
                            <input className='userUpdateInput' placeholder='London | UK' type="text"></input>
                        </div>
                    </div>

                    <div className='userUpdateRight'>
                        <div className='userUpdateUpload'>
                            <img className='userUpdateImg' src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
                            <label htmlFor='file'>
                                <PublishOutlinedIcon className='userUpdateIcon'/>
                            </label>
                            <input type="file" id='file' style={{display:"none"}}/>
                        </div>
                        <button className='userUpdateButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User