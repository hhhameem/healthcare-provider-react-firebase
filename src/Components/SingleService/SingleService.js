import React from "react";
import { Link } from "react-router-dom";
import "./SingleService.css";

const SingleService = (props) => {
  const { id, name, doctor, image } = props.service;
  return (
    <div className='service-container'>
      <div className='flex justify-center mb-4'>
        <img src={image} alt='' className='h-56 rounded-lg w-full' />
      </div>
      <div>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h4 className='text-lg font-semibold'>{doctor}</h4>
        <button className='mt-2 mb-4 px-4 py-1 border-2 bg-yellow-400 border-yellow-500 rounded-lg hover:bg-yellow-500'>
          <Link to={`/services/${id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
};

export default SingleService;
