import React from "react";

const NotFound = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <h1 className='text-red-700 font-extrabold text-6xl md:text-9xl'>404</h1>
      <h1 className='text-red-700 font-extrabold text-2xl md:text-4xl'>
        Page Not Found
      </h1>
    </div>
  );
};

export default NotFound;
