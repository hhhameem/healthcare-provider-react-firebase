import React from "react";

const Member = (props) => {
  const { name, education, image } = props.member;
  return (
    <div className='service-container'>
      <div>
        <img src={image} alt='' className='rounded-lg' />
      </div>
      <div className='mb-2'>
        <h1 className='text font-bold'>{name}</h1>
        <h1 className='text font-bold'>{education}</h1>
      </div>
    </div>
  );
};

export default Member;
