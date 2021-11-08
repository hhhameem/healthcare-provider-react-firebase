import React from "react";

const AboutUs = () => {
  return (
    <div className='mt-24 mb-8 mx-2 md:mx-12'>
      <h1 className='text-black text-4xl font-bold mb-8'>Know More About Us</h1>

      <div className='mb-4'>
        <h1 className='text-3xl font-bold mb-4'>
          What is Mindly.{" "}
          <span className='text-sm text-green-500'>
            {" "}
            - your mental wellbeing
          </span>{" "}
        </h1>
        <p>
          Mindly. can help you find digital mental health services from some of
          Australia’s most trusted mental health organisations. Provided by the
          Australian Department of Health, Mindly brings together apps, online
          programs, online forums, and phone services, as well as a range of
          digital information resources. Whether you are trying to improve your
          own sense of wellbeing, looking for help with something that is
          bothering you, or helping someone you care about— Mindly is a good
          place to start.
        </p>
      </div>
      <div className='mb-4'>
        <h1 className='text-3xl font-bold mb-4'>Our Vission:</h1>
        <p>
          All people in Bangladesh can live free of eating disorders and
          negative body image.
        </p>
      </div>
      <div className='mb-4'>
        <h1 className='text-3xl font-bold mb-4'>Our Vission:</h1>
        <p>
          We work to prevent eating disorders and body image issues from
          occurring, to ensure that the best possible treatments are available,
          and that appropriate care and support is there for those affected.
        </p>
      </div>
      <div className='mb-4'>
        <h1 className='text-3xl font-bold mb-4'>Our History:</h1>
        <p>
          <span className='text-bold'>Mindly</span> was founded by Claire
          Middleton in 2021, a mother of two daughters who had suffered from
          anorexia nervosa. Claire had become acutely aware of the lack of
          resources available and found it very difficult to find help for her
          daughters. Since then, Butterfly has established the National Helpline
          1800 ED HOPE, programs for schools and teachers on body image, a youth
          program, programs for individuals with emerging eating disorders,
          programs for carers, and other community services.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
