import React from 'react'
import "./newProduct.css"
import { useState } from "react"
import { addProduct } from '../../redux/apiCalls'
import { useDispatch } from "react-redux"
import axios from 'axios'

const NewProduct = () => {

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

            const product = {...inputs, img:url}
            addProduct(product, dispatch)
            console.log(product)
        }catch(err){
            console.log(err)
        }

        
    }



  return (
    <div className='newProduct'>
        <h1 className='newProductTitle'>New Product</h1>
        <form className='newProductForm'>
            <div className='newProductItem'>
                <label>Image</label>
                <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>
            </div>

            <div className='newProductItem'>
                <label>Title</label>
                <input name="title" type="text" placeholder='Apple Airpods' onChange={handleChange}/>
            </div>

            <div className='newProductItem'>
                <label>Description</label>
                <input name="description" type="text" placeholder='Description' onChange={handleChange}/>
            </div>

            <div className='newProductItem'>
                <label>Price</label>
                <input name="price" type="text" placeholder='$100' onChange={handleChange}/>
            </div>

            <div className='newProductItem'>
                <label>Categories</label>
                <input name="cat" type="text" placeholder='Pents, Shirts' onChange={handleChange}/>
            </div>

            <div className='newProductItem'>
                <label>Stock</label>
                <select name="inStock" onChange={handleChange}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>

            <button className='newProductButton' onClick={handleClick}>Create</button>
        </form>
    </div>
  )
}

export default NewProduct