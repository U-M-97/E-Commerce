import React from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/featuredInfo'
import Chart from '../../components/charts/chart'
import { userData } from '../../dummyData'
import WidgetLg from '../../components/widgetLg/widgetLg'
import WidgetSm from '../../components/widgetSm/widgetSm'
import { useState, useMemo, useEffect } from 'react'
import { userReq } from '../../requestMethod'

const Home = () => {

  const [userStats, setUserStats] = useState([])

  const MONTHS = useMemo(
    () =>[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  )

  useEffect(() => {
    const getStats = async () => {
      try{
        const res = await userReq.get("/users/stats")
        res.data.map((item) => {
          setUserStats((prev) => [
            ...prev, {name: MONTHS[item._id -1 ], "Active User": item.total},
        ])
        })
      }catch{}
    }
    getStats()
  }, [MONTHS])

  return (
      <div className='home'>
        <FeaturedInfo/>
        <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
        <div className='homeWidgets'>
          <WidgetSm/>
          <WidgetLg/>
        </div>
      </div>
    
  )
}

export default Home