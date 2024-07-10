import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

export const Header = () => {
  const [toggleMenu, setTogglemenu] = useState(false)

  const handletoggle = () => {
    setTogglemenu(false)
  }

  return (
    <div className=" text-white">
      <div className="flex justify-between items-center py-7">
        <h1 className="text-4xl px-4 text-[#90A0D9]" data-aos="fade-right" data-aos-duration="2000">
          D<span className="text-white">.</span>
        </h1>
        <div className='flex mr-auto space-x-4' data-aos="fade-right" data-aos-duration="2000">
          <a href='mailto:dineshubli@gmail.com' className='flex items-center transform transition-transform hover:scale-110'>
            <FaEnvelope className='text-[#90A0D9]' />
          </a>
          <a href='tel:+919345352716' className='flex items-center transform transition-transform hover:scale-110'>
            <FaPhone className='text-[#90A0D9]' />
          </a>
          <a href='https://linkedin.com/in/the-dinesh' target='_blank' rel='noopener noreferrer' className='flex items-center transform transition-transform hover:scale-110'>
            <FaLinkedin className='text-[#90A0D9]' />
          </a>
          <a href='https://github.com/dinesh-m26' target='_blank' rel='noopener noreferrer' className='flex items-center transform transition-transform hover:scale-110'>
            <FaGithub className='text-[#90A0D9]' />
          </a>
        </div>
        <button className='md:hidden px-3' onClick={() => setTogglemenu(!toggleMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>
        </button>
        <div className='hidden md:block'>
          <ul className="flex px-5 my-auto space-x-4">
            <li className="hover:text-[#90A0D9]">
              <a href='/' >Home</a>
            </li>
            <li className="hover:text-[#90A0D9]">
              <a href='#aboutme' > About me</a>
            </li>
            <li className="hover:text-[#90A0D9]">
              <a href='#projects' >Projects</a>
            </li>
            <li className="hover:text-[#90A0D9]">
              <a href='#contact' >Contact</a>
            </li>
          </ul>
        </div> 
        {toggleMenu && (
          <div className='absolute right-3 top-16 w-1/2 bg-[#23283E] rounded'>
            <ul className="text-center p-0 m-0 space-y-2">
              <li className="hover:text-[#90A0D9]">
                <a href='/' onClick={handletoggle}>Home</a>
              </li>
              <li className="hover:text-[#90A0D9]">
                <a href='#aboutme' onClick={handletoggle}>About me</a>
              </li>
              <li className="hover:text-[#90A0D9]">
                <a href='#projects' onClick={handletoggle}>Projects</a>
              </li>
              <li className="hover:text-[#90A0D9]">
                <a href='#contact' onClick={handletoggle}>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
