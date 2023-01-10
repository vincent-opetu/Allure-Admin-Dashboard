import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/apiCalls.js/products';
import Details from '../../components/Details';


function Product() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useDispatch()
   const { pathname } = useLocation()
   const productId = pathname.split('/')[2]
  
   
   useEffect(() => {
       getProduct(dispatch, productId)
    }, [dispatch, productId])
    
    const product = useSelector(state => state.products.product)


  return (
    <div className="flex h-screen overflow-hidden bg-gray-900 bg-opacity-40">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} username='Admin' title={`Product [ ${product?._id} ]`}/>

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            <div className='pt-10 w-full h-full bg-white px-4 pb-4 rounded-md font-mulish'>
              <Details product={product}/>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Product;