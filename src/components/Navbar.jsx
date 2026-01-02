import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';
import { LuLogOut } from 'react-icons/lu';
import { PuffLoader } from 'react-spinners';
import logo from '../assets/logo.jpg';



const Navbar = () => {
  const { user, signOutUser, loading } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const links = <>
    <li className='text-white'><NavLink to='/'>Home</NavLink></li>
    <li className='text-white'><NavLink to='/findPartners'>Find Partners</NavLink></li>
    <li className='text-white'><NavLink to='/resources'>Resources</NavLink></li>
    <li className='text-white'><NavLink to='/aboutUs'>About Us</NavLink></li>
    {
      user && <>
        <li className='text-white'><NavLink to='/createPartnerProfile'>Create Partner Profile</NavLink></li>
        <li className='text-white'><NavLink to='/myConnections'>My Connections</NavLink></li>
      </>

    }

  </>

  const handleSignOut = () => {
    signOutUser()
      .then()
      .catch(error => {
        console.log(error.message);

      })

  }

  // theme toggle 
  useEffect(() => {
    const html = document.querySelector('html');
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  const handleThemeToggle = (e) => {
    const checked = e.target.checked;
    const theme = checked ? 'dark' : 'light';
    setTheme(theme);
  
  }



  return (
   
    <div className="navbar bg-[#0C2B4E] shadow-sm px-4 fixed top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-1 mt-3 w-[calc(100vw-30px)] p-4 shadow  ">
           

            <div className='ml-2'>
            <label className="swap swap-rotate text-white">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={handleThemeToggle}
                checked={theme === 'dark'}
                className="theme-controller"
                 />

              {/* sun icon */}
              <svg
                className="swap-off h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            </div>
             {links}
          </ul>
        </div>
        <Link to='/' className="flex  items-center gap-2 text-white font-bold ">
        <img src={logo} className='w-[30px] h-[30px] sm:w-[55px] sm:h-[55px] rounded-full' alt="" /> <span className='text-[14px] sm:text-xl'>StudyMate</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">

        {/* theme toggle  */}
        <div className='hidden lg:flex'>
        <label className="swap swap-rotate text-white ">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleThemeToggle}
            checked={theme === 'dark'}
            className="theme-controller"
             />

          {/* sun icon */}
          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        </div>
        {
          loading ? <PuffLoader className='px-10' color='#B0E0E6' /> :

            user ? <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className=" m-1 cursor-pointer">
                <figure className=''>
                  <img className='w-[50px] h-[50px] rounded-full object-cover' src={user?.photoURL} alt={user?.displayName || 'User'} />
                </figure>
              </div>
              <ul tabIndex="-1" className="dropdown-content menu bg-gray-600  rounded-box z-1 w-52 p-2 shadow-sm">
                <li><Link className='text-white' to='/dashboard'>Dashboard</Link></li>
                <li><button className='text-white' onClick={handleSignOut}> <LuLogOut />Logout</button></li>

              </ul>
            </div> : <>
              <Link to='/login' className='px-3 py-1 bg-primary rounded-sm text-white font-medium text-[14px] sm:text-[16px] sm:btn sm:btn-primary'>Login</Link>
              <Link to='/register' className='px-3 py-1 bg-primary rounded-sm text-white font-medium text-[14px] sm:text-[16px] sm:btn sm:btn-primary'>Register</Link>
            </>
        }
      </div>
    

    </div>

  );
};

export default Navbar;