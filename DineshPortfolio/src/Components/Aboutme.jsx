import React from 'react';
import logo from "./images/3.png";

const Aboutme = () => {
  return (
    <div id="aboutme" className="px-4 lg:px-0 py-2 md:py-10">
      <h1 className='text-[#90A0D9] text-3xl lg:text-5xl font-bold text-center pb-4'>ABOUT ME</h1>
      <div className='w-full lg:w-2/3 mx-auto text-md'>
        <div className='flex flex-col lg:flex-row items-center'>
          <img src={logo} alt="Dinesh's Logo" className='w-40 lg:w-48 h-auto mr-0 lg:mr-4 mb-4 lg:mb-0 rounded-full border-2 border-[#90A0D9]' />
          <p className='text-white pb-4 lg:pl-4 lg:text-lg '>
            Hello! I'm <span className='text-[#90A0D9]'>Dinesh</span>, a dedicated and meticulous front-end developer with a passion for creating visually stunning and interactive user experiences. My journey into the world of web development ignited from a curiosity about designing aesthetically pleasing websites, evolving into a mastery of diverse technologies.
          </p>
        </div> 
        <p className='text-white pb-4 lg:pl-4 lg:text-lg '>
          As a recent graduate, I bring a fresh perspective, an insatiable appetite for learning, and an unwavering commitment to staying abreast of the latest trends in web development. My aspiration is to contribute to captivating projects, collaborate with talented teams, and continually elevate my skills in this ever-evolving field.
        </p>
        <p className='text-white pb-4 lg:pl-4 lg:text-lg'>
          I am currently on the lookout for opportunities to apply and broaden my skills, make meaningful contributions to projects, and evolve as a front-end developer. Let's embark on the journey of building something extraordinary together!
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
