import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className='bg-gray-700 banner h-96'>
      <div className='my-16 h-96 flex justify-center items-center'>
        <div>
          <h1 className='font-extrabold text-gray-100 text-5xl flex justify-center items-center my-8'>
            Make your life good not only outside but also inside.
          </h1>
          <button className='px-6 py-4 bg-yellow-200 hover:bg-yellow-500 rounded-lg'>
            <Link to='/services' className='font-bold'>
              Our Services
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
