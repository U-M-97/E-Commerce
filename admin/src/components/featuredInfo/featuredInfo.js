import React from 'react'
import "./featuredInfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState, useEffect } from "react"
import { userReq } from "../../requestMethod"

const FeaturedInfo = () => {

    const [income, setIncome] = useState([])
    const [per, setPer] = useState(0)

    useEffect(() =>{
        const getIncome = async () =>{
            try{
                const res = await userReq.get("orders/income")
                setIncome(res.data)
                setPer((res.data[1].total * 100) / res.data[0].total - 100)
            }catch{}
        }
        getIncome()
    }, [])

  return (
    <div className='featured'>
        <div className='featuredItem'>
            <h1 className='featuredTitle'>Revenue</h1>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>${income[1]?.total}</span>
                <span className='featuredMoneyRate'>
                  %{Math.floor(per)}{" "}
                  {per < 0 ? (
                      <ArrowDownwardIcon className='featuredIcon negative'/>  
                  ): (
                      <ArrowUpwardIcon className='featuredIcon'/>  
                  )}
                   
                </span> 
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
        
        <div className='featuredItem'>
            <h1 className='featuredTitle'>Sales</h1>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$40000</span>
                <span className='featuredMoneyRate'>
                    -12 <ArrowDownwardIcon className='featuredIcon negative'/>   
                </span> 
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>

        <div className='featuredItem'>
            <h1 className='featuredTitle'>Cost</h1>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$15000</span>
                <span className='featuredMoneyRate'>
                    -12 <ArrowUpwardIcon className='featuredIcon'/>   
                </span> 
            </div>
            <span className='featuredSub'>Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo