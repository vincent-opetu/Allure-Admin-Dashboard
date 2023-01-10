import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux'
import { fetchStores } from '../../redux/apiCalls.js/store';


function StoreList() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useDispatch()
  const allStores = useSelector(state => state.stores.storeList)
  
  useEffect(() => {
    fetchStores(dispatch)
  }, [dispatch])


  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell: (params) => {
        return (
          <p>{params.row.name}</p>
        );
      },
    },
    { field: "status", headerName: "Status", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='flex space-x-3'>
            <Link to={"/stores/" + params.row._id}>
              <button className="px-4 py-1 bg-blue-500 font-normal text-xs rounded-md text-white">Edit</button>
            </Link>
            <Link to={"/stores/" + params.row._id}>
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
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} username='Admin' title="Store List"/>

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            <div className='pt-10 w-full h-full bg-white px-4 pb-4 rounded-md font-mulish'>
              <DataGrid
                rows={allStores}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
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

export default StoreList;