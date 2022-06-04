import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import  "./topbar.css"
import { logout } from "../../redux/userRedux"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const TopBar = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logout())
        console.log("running")
    }

  return (
    <div className='topbar'>
        <div className='topWrapper'>
            <div className='topLeft'>
                <h1>Admin</h1>
            </div>
            <div className='topRight'>
            <div className='topIconContainer'>
                    <a href="/login">Login</a>
                </div>
                <div className='topIconContainer'>
                    <button onClick={handleClick}>Logout</button>
                </div>
                <div className='topIconContainer'>
                    <NotificationsNoneIcon/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topIconContainer'>
                    <LanguageIcon/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topIconContainer'>
                    <SettingsIcon/>
                </div>
                <img src="https://www.kindpng.com/picc/m/24-248442_female-user-avatar-woman-profile-member-user-profile.png" className='avatar'/>
            </div>
        </div>
    </div>
  )
}

export default TopBar