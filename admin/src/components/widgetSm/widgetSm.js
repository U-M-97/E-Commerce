import React from 'react'
import "./widgetSm.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useState, useEffect} from "react"
import { userReq } from '../../requestMethod';


const WidgetSm = () => {

    const [users, setUsers] = useState([])

    useEffect(() =>{
        const getUsers = async () => {
            const res = await userReq.get("users/?new=true")
            setUsers(res.data)
        }
        getUsers()
    }, [])

  return (
    <div className='widgetSm'>
        <span className='widgetSmTitle'>New Members Joined</span>
        <ul className='widgetSmList'>
            {users.map((user) => {
                return(
                    <li className='widgetSmListItem' key={user._id}>
                        <img src={user.img} className='widgetSmImg'/>
                        <div className='widgetSmUser'>
                            <span className='widgetSmName'>{user.username}</span>
                            <span className='widgetSmUserTitle'>Software Engineer</span>
                        </div>
                        <button className='widgetSmButton'>
                            <VisibilityIcon className='widgetSmIcon'/>Display
                        </button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default WidgetSm