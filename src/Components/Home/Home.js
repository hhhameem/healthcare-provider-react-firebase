import React from "react";
import useService from "../../hooks/useService";
import Banner from "../Banner/Banner";
import SingleService from "../SingleService/SingleService";
import doctor from "../../images/doctor.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const services = useService();

  return (
    <div>
      <Banner></Banner>
      <div className='bg-indigo-50 py-4'>
        <div className='my-8 mx-4 lg:mx-8'>
          <div className='mb-4'>
            <h1 className='font-bold text-3xl'>Popular Services</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {services.slice(0, 6).map((service) => (
              <SingleService key={service.id} service={service}></SingleService>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-yellow-50 py-4'>
        <div className='my-8 flex flex-col gap-4 mx-2 md:mx-4 md:flex-row'>
          <div>
            <img src={doctor} alt='' className='rounded-lg' />
          </div>
          <div className='text-center md:text-left'>
            <div>
              <h1 className='text-3xl font-bold text-center mb-4'>
                Our Doctors
              </h1>
            </div>
            <div>
              <p>
                State of the art technology and expertise combined with the
                support of our friendly staff, we strive each day to be the top
                healthcare provider, not only in Bangladesh but within the
                Asia-Pacific region.
              </p>
              <button className='mt-8 px4 py-2 border-2 border-yellow-500 rounded-lg bg-yellow-400 hover:bg-yellow-500'>
                <Link to='/our-team' className='px-4'>
                  Know More about Them
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-green-50 py-4'>
        <div className='my-8 mx-2 md:mx-4'>
          <h1 className='font-bold text-3xl mb-2'>Subscribe</h1>
          <p>Subscribe with your email to get all the updates about us.</p>
          <div className='mt-4'>
            <form class='flex justify-center'>
              <input
                class='rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white'
                placeholder='your@mail.com'
              />
              <button class='px-2 md:px-8 rounded-r-lg bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
