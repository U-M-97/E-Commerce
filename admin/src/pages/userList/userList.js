import React from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useEffect } from 'react'
import { getUsers, deleteUser } from "../../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux"

const UserList = ()  => {

  const dispatch = useDispatch()
  const users = useSelector((state) => state.user.users)


  useEffect(() =>{
    getUsers(dispatch)
  }, [dispatch])


   const handleDelete = (id) =>{
    deleteUser(id, dispatch)
   }

  const columns = [
    { field: '_id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 200,
      renderCell: (params) =>{
        return(
          <div className='userListUser'>
            <img className='userListImg' src={params.row.img}/>
            {params.row.username}
          </div>
        )
      }
  },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'isAdmin',
      headerName: 'Admin',
      width: 120,
    },
    { field: 'action', headerName: 'Action', width: 150,
      renderCell: (params) =>{
        return(
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon className='userListDelete' onClick={() =>handleDelete(params.row._id)}/>
          </>
        )
      }
  },
  ];

  return (
    <div className='userList'>
      <DataGrid
      rows={users}
      disableSelectionOnClick
      columns={columns}
      getRowId={(row) => row._id}
      pageSize={8}
      checkboxSelection
      />
    </div>
  )
}

export default UserList