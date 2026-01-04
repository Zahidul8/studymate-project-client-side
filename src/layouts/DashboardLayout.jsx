import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router';
import logo from '../assets/logo.jpg';
import useAuth from '../hooks/useAuth';
import { LuLogOut } from 'react-icons/lu';
import { FaHome, FaUserFriends, FaUserPlus } from 'react-icons/fa';

const DashboardLayout = () => {
  const { user, signOutUser, loading } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser().then(() => navigate('/login'))

      .catch(error => {
        console.log(error.message);

      })

  }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300 flex justify-between">
          <div className='flex'>
            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
              {/* Sidebar toggle icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
            </label>
            {/* <div className='flex justify-between'> */}
            <div className="px-4 text-3xl font-bold">Welcome to StudyMate</div>
          </div>
          {
            user && <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className=" m-1 cursor-pointer">
                <figure className=''>
                  <img className='w-[50px] h-[50px] rounded-full object-cover' src={user?.photoURL} alt={user?.displayName || 'User'} />
                </figure>
              </div>
              <ul tabIndex="-1" className="dropdown-content menu bg-gray-600  rounded-box z-1 w-52 p-2 shadow-sm">
                <li><Link className='text-white' to='/dashboard'>Dashboard Home</Link></li>
                <li><Link className='text-white' to='/dashboard/profile'>Profile</Link></li>
                <li><button className='text-white' onClick={handleSignOut}> <LuLogOut />Logout</button></li>

              </ul>
            </div>
          }

          {/* </div> */}
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                {/* Home icon */}
                <Link to={'/'}>
                  <img src={logo} className='max-w-[35px] max-h-[35px] rounded-full' alt="" />
                </Link>

              </button>
            </li>

            {/* List item */}
            <li>
              <Link to={'/dashboard'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard Home">
                {/* Settings icon */}
                <FaHome className="text-lg " />
                <span className="is-drawer-close:hidden">Dashbord Home</span>
              </Link >
            </li>
            <li>
              <Link
                to="/dashboard/createPartnerProfile"
                className="flex items-center gap-3 is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Create Study Partner"
              >
                <FaUserPlus className="text-lg " />
                <span className="is-drawer-close:hidden">
                  Create Study Partner
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/myConnections"
                className="flex items-center gap-3 is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Connections"
              >
                <FaUserFriends className="text-lg" />
                <span className="is-drawer-close:hidden">
                  My Connections
                </span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;