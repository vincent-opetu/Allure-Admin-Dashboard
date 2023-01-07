import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Welcome from '../../partials/dashboard/Welcome';
import Card001 from '../../partials/dashboard/Card001';
import { BsCart2 } from 'react-icons/bs'
import { RxCodesandboxLogo } from 'react-icons/rx'
import { HiOutlineUsers } from 'react-icons/hi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

function Overview() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-pink-400 bg-opacity-10">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} username='Admin'/>

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:items-center mb-8">
              <Welcome />
            </div>
            {/* Cards */}
            <div className="grid grid-cols-4 gap-6">
                <Card001 icon={<BsCart2 className='w-7 h-7 text-[#53237C]'/>} title="Orders" amount="10" perc="4.5" bgColor="bg-[#EEEAF2]" brdColor="border-[#BAA7CB]" prColor='#53237C'/>
                <Card001 icon={<RxCodesandboxLogo className='w-7 h-7 text-[#53237C]'/>} title="Products" amount="3150" perc="4.5" bgColor="bg-[#EEEAF2]" brdColor="border-[#BAA7CB]" prColor='#53237C'/>
                <Card001 icon={<HiOutlineUsers className='w-7 h-7 text-[#53237C]'/>} title="Users" amount="145" perc="4.5" bgColor="bg-[#EEEAF2]" brdColor="border-[#BAA7CB]" prColor='#53237C'/>
                <Card001 icon={<RiMoneyDollarCircleLine className='w-7 h-7 text-[#53237C]'/>} title="Sales" amount="200" perc="4.5" bgColor="bg-[#EEEAF2]" brdColor="border-[#BAA7CB]" prColor='#53237C'/>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Overview;