import React from "react";
import useService from "../../hooks/useService";
import SingleService from "../SingleService/SingleService";

const AllServices = () => {
  const services = useService();

  return (
    <div>
      <h1 className='text-black font-extrabold text-xl mx-4 mt-24'>
        Choose Your Desired Service
      </h1>
      <div className='mx-4 my-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {services.map((service) => (
          <SingleService key={service.id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
