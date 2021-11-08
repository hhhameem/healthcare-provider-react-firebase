import { useEffect, useState } from "react";
import {
  faClock,
  faDollarSign,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";
import useService from "../../hooks/useService";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const services = useService();
  const [desiredService, setDesiredService] = useState([]);

  console.log(services);
  useEffect(() => {
    const foundService = services.find((service) => {
      return service.id === parseInt(serviceId);
    });
    setDesiredService(foundService);
  }, [services, serviceId]);

  return (
    <div>
      <div className='mt-20 mb-8'>
        <h1 className='text-black font-bold text-3xl mb-4 text-center'>
          {desiredService?.name}
        </h1>
        <div className='mx-2 md:mx-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center'>
          <div className='text-left leading-loose'>
            <h1 className='font-bold text-xl mb-2'>
              {" "}
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>{" "}
              {desiredService?.doctor}
            </h1>
            <h1 className='font-bold text-xl mb-2'>
              {" "}
              <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>{" "}
              {desiredService?.fees}
            </h1>
            <h1 className='font-bold text-xl mb-2'>
              {" "}
              <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{" "}
              {desiredService?.duration} Hour
            </h1>
            <h1 className='mb-2'>{desiredService?.details}</h1>
          </div>
          <div>
            <img src={desiredService?.image} alt='' />
          </div>
        </div>
      </div>
      <div className='bg-indigo-50 mt-8 mb-12 grid grid-cols-1 items-center gap-4 md:grid-cols-2'>
        <div>
          <h1 className='text-4xl text-black font-bold'>Book An Appointment</h1>
        </div>
        <div className='mx-2 md:mr-16'>
          <form className='flex flex-col space-y-8 mt-10 mb-10'>
            <input
              type='text'
              placeholder='First name'
              className='border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500'
            />
            <input
              type='text'
              placeholder='Last name'
              className='border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500'
            />
            <input
              type='text'
              placeholder='Email'
              className='border rounded-lg py-3 px-3 bg-gray-700 border-gray-700 placeholder-gray-500'
            />
            <button className='border border-blue-500 bg-blue-500 text-white rounded-lg py-3 font-semibold mb-4'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
