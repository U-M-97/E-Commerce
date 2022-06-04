import React from 'react'
import "./widgetLg.css"
import { useState, useEffect } from "react"
import {userReq} from "../../requestMethod"
import {format} from "timeago.js"

const WidgetLg = () => {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      try{
        const res = await userReq.get("orders")
        setOrders(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getOrders()
  }, [])

  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h1 className='widgetLgTitle'>Latest Transactions</h1>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>

        {orders.map((order) => {
          return(
        <tr className='widgetLgTr' key={order._id}>
          <td className='widgetLgUser'>
            <img src={order.img} className='widgetLgImg'/>
            <span className='widgetLgUser'>{order.userId}</span>
          </td>
          <td className='widgetLgDate'>{format(order.createdAt)}</td>
          <td className='widgetLgAmount'>{order.amount}</td>
          <td className='widgetLgStatus'>
            <Button type={order.status}/>
          </td>
        </tr>
          )
        })}
        

      </table>
    </div>
  )
}

export default WidgetLg