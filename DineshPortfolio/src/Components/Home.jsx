import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTypewriter } from 'react-simple-typewriter'

export const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Front End", "Web"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 70,
  });

  return (
    <div className='md:py-7 md:pt-9 mx-auto py-2 '>
      <div className="text-center">
        <h2 className='font-bold text-4xl md:text-6xl pb-2'>Hi, I'm <span className='text-[#90A0D9]'>Dinesh</span></h2>
        <h3 className='pb-2 text-2xl md:text-4xl'><span className='text-[#90A0D9]'>{typeEffect}</span> Developer</h3>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center py-1'>
        <a href="https://drive.google.com/file/d/15CeQjDhK1OLM6M6kp4k8IDPUhogJUTdo/view?usp=drivesdk" target='_blank' rel='noopener noreferrer' className='text-[#90A0D9] border border-[#90A0D9] hover:bg-[#90A0D9] hover:text-[#23283E] hover:border-[#23283E] px-4 py-2 mb-3 md:mb-0 md:mr-3'>Resume</a>
        <div className='flex justify-center items-center pb-4 md:pb-0'>
          <a href='https://linkedin.com/in/the-dinesh' target='_blank' rel='noopener noreferrer'><FaLinkedin className='mr-3 transform transition-transform hover:scale-110' size={40} /></a>
          <a href='https://github.com/dinesh-m26' target='_blank' rel='noopener noreferrer'><FaGithub className='mr-3 transform transition-transform hover:scale-110' size={40} /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
