import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';
import { LuLogOut } from 'react-icons/lu';

const Navbar = () => {
  const {user, signOutUser} = useAuth();

  const links = <>
  <li className='text-white'><NavLink to='/'>Home</NavLink></li>
  <li className='text-white'><NavLink to='/findPartners'>Find Partners</NavLink></li>
  {
    user && <>
    <li className='text-white'><NavLink to='/createPartnerProfile'>Create Partner Profile</NavLink></li>
    <li className='text-white'><NavLink to='/myConnections'>My Connections</NavLink></li>
    </>
    
  }
  
  </>

  const handleSignOut = () =>{
    signOutUser()
    .then()
    .catch(error => {
      console.log(error.message);
      
    })

  }
    return (
        <div className="navbar bg-[#0C2B4E] shadow-sm px-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {links}
      </ul>
    </div>
    <a className=" text-white font-bold text-xl">StudyMate</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    {
      user? <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className=" m-1 cursor-pointer">
    <figure className='w-[50px] h-[50px]'>
      <img className='rounded-full object-cover' src={user.photoURL} alt="" />
    </figure>
  </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><Link to='/profile'>Profile</Link></li>
    <li><button onClick={handleSignOut}> <LuLogOut />Logout</button></li>
    
  </ul>
</div>: <>
      <Link to='/login' className='btn btn-primary'>Login</Link>
    <Link to='/register' className='btn btn-primary'>Register</Link>
      </>
    }
  </div>
</div>
    );
};

export default Navbar;