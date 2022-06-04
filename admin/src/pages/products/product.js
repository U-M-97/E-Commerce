import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./product.css"
import Chart from "../../components/charts/chart"
import {productData} from "../../dummyData"
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import { useSelector } from "react-redux";
import { useState, useMemo, useEffect} from "react"
import {userReq} from "../../requestMethod"

const Product = () => {

    const location = useLocation()
    const productId = location.pathname.split("/")[2]
    const [pStats, setPStats] = useState([]) 

    const product = useSelector((state) => {
        return(
            state.product.products.find((product) => product._id === productId)
        )
       
    })

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
                const res = await userReq.get("orders/income?pid=" + productId)
                const list = res.data.sort((a,b) => {
                    return(
                        a._id - b._id
                    )
                })
                list.map((item) => {
                    return(
                        setPStats((prev)=>[
                            ...prev,
                            {name: MONTHS[item._id -1], Sales: item.total}
                        ])
                    )
                })
            }catch(err){
                console.log(err)
            }
        }
      }, [productId, MONTHS])
    

  return (
    <div className='product'>
        <div className='productTitleContainer'>
            <h1 className='productTitle'>Product</h1>
            <Link to="/newProduct">
                <button className='productAddButton'>Create</button>
            </Link>
        </div>

        <div className='productTop'>
            <div className='productTopLeft'>
                <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
            </div>

            <div className='productTopRight'>
                <div className='productInfoTop'>
                    <img src={product.img} className='productInfoImg'/>
                    <span className='productName'>{product.title}</span>
                </div>

                <div className='productInfoBottom'>
                    <div className='productInfoItem'>
                        <span className='productInfoKey'>id:</span>
                        <span className='productInfoValue'>{product._id}</span> 
                    </div>

                    <div className='productInfoItem'>
                        <span className='productInfoKey'>Sales:</span>
                        <span className='productInfoValue'>12345</span> 
                    </div>

                    <div className='productInfoItem'>
                        <span className='productInfoKey'>in stock:</span>
                        <span className='productInfoValue'>{product.inStock}</span> 
                    </div>
                </div>
            </div>
        </div>

        <div className='productBottom'>
            <form className='productForm'>
                <div className='productFormLeft'>
                    <label>Product Name</label>
                    <input type="text" placeholder={product.title}/>
                    <label>Product Description</label>
                    <input type="text" placeholder={product.description}/>
                    <label>Price</label>
                    <input type="text" placeholder={product.price}/>
                    <label>In Stock</label>
                    <select name='inStock' id='idStock'>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                <div className='productFormRight'>
                    <div className='productUpload'>
                        <img src={product.img} className='productUploadImg'/>
                        <label for="file">
                            <PublishOutlinedIcon/>
                        </label>
                    </div>
                    <button className='productButton'>Update</button>
                </div>
            </form>
        </div>
    </div>

    
  )
}

export default Product