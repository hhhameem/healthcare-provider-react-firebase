import React, { useEffect, useState } from "react";
import Member from "../Member.js/Member";

const OurTeam = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("./team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  return (
    <div className='mt-20 mb-6'>
      <div className='mb-4'>
        <h1 className='text-black text-4xl font-bold'>Meet Our Team</h1>
        <p>We have some world class Psychologist to serve you. </p>
      </div>
      <div className='mx-2 md:mx-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {team.map((member) => (
          <Member key={member.id} member={member}></Member>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
