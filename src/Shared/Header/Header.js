import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { FaUserAlt } from 'react-icons/fa';
import {  Link as ScrollLink } from 'react-scroll'

import { AuthDataContext } from '../../UseContext/AuthContext';

const Header = () => {
  const {user,logout} = useContext(AuthDataContext)

  const handleLogout = () =>{
    localStorage.removeItem('car-token');
    logout();
  }
    const menuItems = <>
    <li className='font-semibold ml-2'><Link to ='/home'>Home</Link></li>
    <li className='font-semibold ml-2'><Link to ='/blog'>Blog</Link></li>
    
    {
      user && user.uid?
      <>
      <li  className='font-semibold ml-2'><Link to ='/orders'>Orders</Link></li>
      <li onClick={handleLogout} className='font-semibold ml-2'><Link to ='/'>Logout</Link></li>
      
      </>
      :
      <li  className='font-semibold ml-2'><Link to ='login'>Login</Link></li>

    }
    
    </>
    return (
        <div className="navbar mb-6 pt-6 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                
              {menuItems}
              
             
            </ul>
          </div>
          <Link to='/' className=" normal-case text-xl">
            <img className='h-12' src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
            
          
            
            
          </ul>
        </div>
        <div className="navbar-end">
          <div className='mr-5  tooltip  tooltip-bottom' data-tip={user?.displayName}>
            {
              user && user?.photoURL?
              <img className='h-10 rounded-full border border-sky-400' src={user?.photoURL} alt="" />
              :
             
                <FaUserAlt></FaUserAlt>
              
              

            }
          </div>
          
          {/* <Button  className="btn"to="/" spy={true} smooth={true}  >
          Test 2
        </Button> */}
        <ScrollLink to= 'services' spy={true} smooth={true} offset={50}>

          <button className="btn btn-outline btn-warning">Appointment</button>
        </ScrollLink>
          
        </div>
      </div>
    );
};

export default Header;