import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../utils/Transition';
// import { useDispatch } from 'react-redux';
    // "react-images-upload": "^1.2.8",
// import axiosInstance from '../../axiosConfig';
// import { getToken } from '../../features/user/tokenSlice';

function UserMenu() {

//   const dispatch = useDispatch();

  const [dropdownOpen, setDropdownOpen] = useState(false);

   // Login fetch user credentials
//   const [userEmail, setUserEmail] = useState('');
  // const [loading, setLoading] = useState(true);
  // console.log(loading);

  // useEffect(() => {
  //   if(sessionStorage.getItem('jwtAccessToken') === null) {
  //     window.location.href='/'; 
  //   } else {
  //     axiosInstance.get('/user')
  //     .then(response => {
  //       setUserEmail(response.data.first_name);
  //       setLoading(false);
  //     });
  //   }
  // }, []);

  // Logout
//   const logout = () => {
//     sessionStorage.removeItem('jwtAccessToken');
//     dispatch(getToken(null));
//     window.location.href='/login';
//   }

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img className="w-12 h-12 object-center object-cover rounded-full" src="https://images.unsplash.com/photo-1495716868937-273203d5bb0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="User" />
        {/* <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-base font-normal text-black group-hover:text-slate-800">Grace Smithson</span>
          <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div className="font-normal text-sm text-slate-800">admin@mydokta.</div>
            {/* <div className="text-xs text-slate-500 italic">Admin</div> */}
          </div>
          <ul>
            {/* <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Settings
              </Link>
            </li> */}
            <li>
              <button
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  )
}

export default UserMenu;