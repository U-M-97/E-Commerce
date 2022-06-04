import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaidIcon from '@mui/icons-material/Paid';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import EmailIcon from '@mui/icons-material/Email';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
import BadgeIcon from '@mui/icons-material/Badge';
import ReportIcon from '@mui/icons-material/Report';
import "./sidebar.css"
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className='sideBar'>
        <div className='sideBarWrapper'>
            <div className='sideBarMenu'>
                <h3 className='sideBarTitle'>Dashboard</h3>
                <ul className='sideBarList'>
                    <Link to="/" className='link'>
                        <li className='listItem active'>
                            <HomeIcon className='sideBarIcon' />Home
                        </li>
                    </Link>
                    <li className='listItem'>
                        <AnalyticsIcon className='sideBarIcon'/>Analytics
                    </li>
                    <li className='listItem'>
                        <TrendingUpIcon className='sideBarIcon'/>Sales
                    </li>
                </ul>
            </div>

            <div className='sideBarMenu'>
                <h3 className='sideBarTitle'>Quick Menu</h3>
                <ul className='sideBarList'>
                    <Link to="/users" className='link'>
                        <li className='listItem'>
                            <PersonIcon className='sideBarIcon'/>User
                        </li>
                    </Link>   
                    <Link to="/products" className='link'>                
                        <li className='listItem'>
                            <Inventory2Icon className='sideBarIcon'/>Products
                        </li>
                        </Link>
                    <li className='listItem'>
                        <PaidIcon className='sideBarIcon'/>Transactions
                    </li>
                    <li className='listItem'>
                        <StackedBarChartIcon className='sideBarIcon'/>Reports
                    </li>
                </ul>
            </div>

            <div className='sideBarMenu'>
                <h3 className='sideBarTitle'>Notifications</h3>
                <ul className='sideBarList'>
                    <li className='listItem'>
                        <EmailIcon className='sideBarIcon'/>Mail
                    </li>
                    <li className='listItem'>
                        <FeedbackIcon className='sideBarIcon'/>Feedback
                    </li>
                    <li className='listItem'>
                        <MessageIcon className='sideBarIcon'/>Messages
                    </li>
                </ul>
            </div>

            <div className='sideBarMenu'>
                <h3 className='sideBarTitle'>Staff</h3>
                <ul className='sideBarList'>
                    <li className='listItem'>
                        <BadgeIcon className='sideBarIcon'/>Manage
                    </li>
                    <li className='listItem'>
                        <AnalyticsIcon className='sideBarIcon'/>Analytics
                    </li>
                    <li className='listItem'>
                        <ReportIcon className='sideBarIcon'/>Report
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar