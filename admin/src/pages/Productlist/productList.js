import React from 'react'
import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, getProducts } from '../../redux/apiCalls';


const ProductList = () => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products)
    console.log(products)

    useEffect(() => {
      getProducts(dispatch)
    }, [dispatch])

    const handleDelete = (id) =>{
        deleteProduct(id, dispatch)
    }

    const columns = [
        { field: "_id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.title}
              </div>
            );
          },
        },
        { field: "inStock", headerName: "Stock", width: 220 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "price",
          headerName: "Price",
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row._id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutlineOutlinedIcon
                  className="productListDelete"
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
      ];

  return (
    <div className='productList'>
        <DataGrid 
            rows={products}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
        />
    </div>
  )
}

export default ProductList