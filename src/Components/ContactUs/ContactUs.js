import React from "react";

const ContactUs = () => {
  return (
    <div className='mb-12'>
      <h1 className='text-3xl font-black mb-4'>Contact Us</h1>
      <div>
        <form>
          <input
            type='text'
            placeholder='Name'
            className='block text-center w-4/6 border-2 border-gray-600'
          />
          <input
            type='email'
            placeholder='Email'
            className='border-2 border-gray-600'
          />
          <textarea
            placeholder='Your text'
            className='border-2 border-gray-600'
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
