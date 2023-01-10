import React from 'react';
// import SearchModal from '../partials/header/SearchModal';
import Notifications from '../partials/header/Notifications';
import UserMenu from './header/UserMenu';
// import { FiSearch } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import { adminLogout } from '../redux/apiCalls.js/user';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Header({
  sidebarOpen,
  setSidebarOpen, username, title
}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userEmail = useSelector(state => state.user?.currentUser?.email)

  const handleLogout = () => {
     adminLogout(dispatch, userEmail)
     navigate("/")
     toast.success("Logout successfull")
  }

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
                          <h2 className='text-2xl font-light'>{title}</h2>
                      </div>
                  </div>
              </div>
            </div>

            {/* </div> */}

          {/* Header: Right side */}
          <div className="flex items-center justify-end">
            <Notifications />
            {/*  Divider */}
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu username={username} handleLogout={() => handleLogout()}/>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;