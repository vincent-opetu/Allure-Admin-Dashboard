import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from '../utils/Logo'
import { HiOutlineHome, HiOutlineUsers } from 'react-icons/hi'
import { RxCodesandboxLogo } from 'react-icons/rx'
import { BiReceipt } from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs'
import { MdStorefront } from 'react-icons/md'

function Sidebar({sidebarOpen,setSidebarOpen}) {

  const location = useLocation();
  const { pathname } = location;
  const id = pathname.split('/')[2]

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-slate-800 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      {/* Sidebar  */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-1.5">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}   
          <div className='grid justify-center w-full pt-5'>
            <Logo/>
          </div>
     
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
            </h3>
            <ul className="mt-10 space-y-3">

              {/* Dashboard */}
              <li className={`px-3 py-3 rounded-xl flex justify-center mb-0.5 last:mb-0 ${pathname === '/overview' && 'bg-[#CB2BCB]'}`}>
                <NavLink end to="/overview" className={`block text-slate-800 hover:text-gray-500 truncate transition duration-150 ${pathname === '/overview' && '!text-slate-200'}`}>
                  <div className="w-36">
                    <div className='flex items-center'>
                        <HiOutlineHome className={`shrink-0 w-7 h-6 text-slate-800 ${pathname === '/overview' && '!text-slate-200'}`}/>
                        <span className="text-base font-normal ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Overview</span>
                    </div>
                  </div>
                </NavLink>
              </li>
              {/* Orders */}
              <li className={`px-3 py-3 rounded-xl flex justify-center mb-0.5 last:mb-0 ${pathname === '/orders' && 'bg-[#CB2BCB]'}`}>
                <NavLink end to="/orders" className={`block text-slate-800 hover:text-gray-500 truncate transition duration-150 ${pathname === '/orders' && '!text-slate-200'}`}>
                    <div className="w-36">
                        <div className="flex items-center">
                            <BsCart2 className={`shrink-0 w-7 h-6 text-slate-800 ${pathname === '/orders' && '!text-slate-200 !'}`}/>
                            <span className="text-base font-normal ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Orders</span>
                        </div>
                    </div>
                </NavLink>
              </li>
              {/* Products */}
              <li className={`px-3 py-3 rounded-xl flex justify-center mb-0.5 last:mb-0 ${pathname === '/products' && 'bg-[#CB2BCB]'} ${pathname === `/products/${id}` && 'bg-[#CB2BCB]'}`}>
                <NavLink end to="/products" className={`block text-slate-800 hover:text-gray-500 truncate transition duration-150 ${pathname === '/products' && '!text-slate-200'} ${pathname === `/products/${id}` && '!text-slate-200'}`}>
                    <div className="w-36">
                        <div className="flex items-center">
                            <RxCodesandboxLogo className={`shrink-0 w-7 h-6 text-slate-800 ${pathname === '/products' && '!text-slate-200'} ${pathname === `/products/${id}` && '!text-slate-200'}`}/>
                            <span className="text-base font-normal ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Products</span>
                        </div>
                    </div>
                </NavLink>
              </li>
              {/* Users */}
              <li className={`px-3 py-3 rounded-xl flex justify-center mb-0.5 last:mb-0 ${pathname === '/users' && 'bg-[#CB2BCB]'}`}>
                <NavLink end to="/users" className={`block text-slate-800 hover:text-gray-500 truncate transition duration-150 ${pathname === '/users' && '!text-slate-200'}`}>
                    <div className="w-36">
                        <div className="flex items-center">
                            <HiOutlineUsers className={`shrink-0 w-7 h-6 text-slate-800 ${pathname === '/users' && '!text-slate-200 !'}`}/>
                            <span className="text-base font-normal ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Users</span>
                        </div>
                    </div>
                </NavLink>
              </li>
              {/* Stores */}
              <li className={`px-3 py-3 rounded-xl flex justify-center mb-0.5 last:mb-0 ${pathname === '/stores' && 'bg-[#CB2BCB]'} ${pathname === `/stores/${id}` && 'bg-[#CB2BCB]'}`}>
                <NavLink end to="/stores" className={`block text-slate-800 hover:text-gray-500 truncate transition duration-150 ${pathname === '/stores' && '!text-slate-200'} ${pathname === `/stores/${id}` && '!text-slate-200'}`}>
                    <div className="w-36">
                        <div className="flex items-center">
                            <MdStorefront className={`shrink-0 w-7 h-6 text-slate-800 ${pathname === '/stores' && '!text-slate-200 !'} ${pathname === `/stores/${id}` && '!text-slate-200 !'}`}/>
                            <span className="text-base font-normal ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Stores</span>
                        </div>
                    </div>
                </NavLink>
              </li>
              {/* Transcations */}
              <li className={`px-3 py-3 rounded-xl flex justify-center mb-0.5 last:mb-0 ${pathname === '/transactions' && 'bg-[#CB2BCB]'}`}>
                <NavLink end to="/transactions" className={`block text-slate-800 hover:text-gray-500 truncate transition duration-150 ${pathname === '/transactions' && '!text-slate-200'}`}>
                    <div className="w-36">
                        <div className="flex items-center">
                            <BiReceipt className={`shrink-0 w-7 h-6 text-slate-800 ${pathname === '/transactions' && '!text-slate-200 !'}`}/>
                            <span className="text-base font-normal ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Transactions</span>
                        </div>
                    </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;