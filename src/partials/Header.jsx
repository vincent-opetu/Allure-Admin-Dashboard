import React from 'react';
// import SearchModal from '../partials/header/SearchModal';
import Notifications from '../partials/header/Notifications';
import UserMenu from './header/UserMenu';
import { FiSearch } from 'react-icons/fi'

function Header({
  sidebarOpen,
  setSidebarOpen, username, logout
}) {

  // const [searchModalOpen, setSearchModalOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 py-2 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 items-center justify-between h-16 -mb-px">

          {/* Header: Left side */}
          <div className="flex">

            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
    
              <div class="flex items-center w-full">   
                  <label for="simple-search" class="sr-only">Search</label>
                  <div class="relative w-full">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FiSearch className="w-5 h-5 text-gray-500"/>
                      </div>
                      <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search Appointment, Patients, File, Staff etc" required />
                  </div>
                  {/* <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white rounded-lg border focus:ring-4 focus:outline-none focus:ring-blue-300">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      <span class="sr-only">Search</span>
                  </button> */}
              </div>
            </div>

            {/* </div> */}

          {/* Header: Right side */}
          <div className="flex items-center justify-end">
            <Notifications />
            {/*  Divider */}
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu username={username} logout={logout}/>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;