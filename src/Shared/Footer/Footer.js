import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer  text-white p-10  bg-black text-base-content">
  <div className='w-1/2 mx-auto text-white' >
    <img src={logo} alt="" />
    <p>Car Doctor Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  
  <div className='w-1/2 text-white mx-auto' >
    <span className="footer-title">Services</span> 
    <Link to="/" className="link link-hover">Branding</Link> 
    <Link to="/" className="link link-hover">Design</Link> 
    <Link to="/" className="link link-hover">Marketing</Link> 
    <Link to="/" className="link link-hover">Advertisement</Link>
  </div> 
  <div className='w-1/2 text-white mx-auto'>
    <span className="footer-title">Company</span> 
    <Link to='/' className="link link-hover">About us</Link> 
    <Link to='/' className="link link-hover">Contact</Link> 
    <Link to='/' className="link link-hover">Jobs</Link> 
    <Link to='/' className="link link-hover">Press kit</Link>
  </div> 
  <div className='w-1/2 text-white mx-auto'>
    <span className="footer-title">Legal</span> 
    <Link to='/' className="link link-hover">Terms of use</Link> 
    <Link to='/' className="link link-hover">Privacy policy</Link> 
    <Link to='/' className="link link-hover">Cookie policy</Link>
  </div>
</footer>
    );
};

export default Footer;