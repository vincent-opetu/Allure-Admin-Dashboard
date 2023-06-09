import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux'
import { productRows } from '../../dummyData';
import { getUsers } from '../../redux/apiCalls.js/users';


function UsersList() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useDispatch()
  
  useEffect(() => {
    getUsers(dispatch)
  }, [dispatch])
  
  const allUsers = useSelector(state => state.users.usersList)
  console.log("Users", allUsers)

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "name",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center space-x-3">
            <img className="w-8 h-8 rounded-full" src={params.row.img} alt="" />
            <p>{params.row.name}</p>
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='flex space-x-3'>
            <Link to={"/products/" + params.row.id}>
              <button className="px-4 py-1 bg-blue-500 font-normal text-xs rounded-md text-white">Edit</button>
            </Link>
            <Link to={"/products/" + params.row.id}>
              <button className="px-4 py-1 bg-red-500 font-normal text-xs rounded-md text-white">Delete</button>
            </Link>
            {/* <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            /> */}
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-900 bg-opacity-40">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} username='Admin' title="Users"/>

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            <div className='pt-10 w-full h-full bg-white px-4 pb-4 rounded-md font-light'>
              <DataGrid
                rows={productRows}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row.id}
                autoHeight={true}
                checkboxSelection
              />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default UsersList;