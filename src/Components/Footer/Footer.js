import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className='w-100 h-26 bg-gray-800 flex flex-col justify-evenly items-center md:flex-row'>
      <div className='text-left'>
        <img src={logo} alt='' className='h-20 w-20' />
      </div>
      <div>
        <div>
          <Link to='/home' className='px-2 text-white'>
            Home
          </Link>
          <Link to='/services' className='px-2 text-white'>
            Services
          </Link>
          <Link to='/our-team' className='px-2 text-white'>
            Our Team
          </Link>
          <Link to='/about-us' className='px-2 text-white'>
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
