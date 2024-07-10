import React from 'react';
import { FaGithub, FaRegArrowAltCircleRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Facebook Clone',
    description: 'A clone of the Facebook interface using HTML and CSS, showcasing the ability to recreate a complex and responsive web layout.',
    githubLink: 'https://github.com/Dinesh-m26/facebook-clone.git',
    liveDemoLink: 'https://facebkclone.netlify.app/',
  },
  {
    title: 'E-commerce Website',
    description: 'An online store built with HTML, CSS, and Bootstrap, demonstrating the implementation of a responsive, user-friendly shopping platform.',
    githubLink: 'https://github.com/Dinesh-m26/project1.git',
    liveDemoLink: 'https://digosclothing.netlify.app/',
  },
  {
    title: 'ToDo List',
    description: 'A task management app using HTML, CSS, Bootstrap, and JavaScript, allowing users to add, edit, and delete tasks with a clean and intuitive interface.',
    githubLink: 'https://github.com/Dinesh-m26/yourmind.git',
    liveDemoLink: 'https://yourmind.netlify.app/',
  },
  {
    title: 'CRUD Application',
    description: 'A Create, Read, Update, Delete (CRUD) application built with ReactJS, demonstrating proficiency in state management and React hooks.',
    githubLink: 'https://github.com/Dinesh-m26/CRUD.git',
    liveDemoLink: 'https://cruddashboard.netlify.app/',
  },
  {
    title: 'BMI Calculator',
    description: 'A Body Mass Index calculator made with ReactJS, allowing users to input their height and weight to calculate their BMI with real-time feedback.',
    githubLink: 'https://github.com/Dinesh-m26/Bmicalculator.git',
    liveDemoLink: 'https://bmitester.netlify.app/',
  },
  {
    title: 'Mini E-commerce',
    description: 'A mini e-commerce platform created with ReactJS, showcasing the ability to handle product listings, user authentication, and shopping cart functionality.',
    githubLink: 'https://github.com/Dinesh-m26/Miniecom.git',
    liveDemoLink: 'https://mini-ecomm.netlify.app/',
  },
  {
    title: 'Currency Converter',
    description: 'A currency converter application built with ReactJS, providing real-time currency exchange rates and a user-friendly interface for conversion.',
    githubLink: 'https://github.com/Dinesh-m26/Currency.git',
    liveDemoLink: 'https://currencyconvo.netlify.app/',
  },
  {
    title: 'Weather App',
    description: 'A weather forecasting app using ReactJS, allowing users to search for current weather conditions in various locations with real-time data fetching.',
    githubLink: 'https://github.com/Dinesh-m26/weatherapp.git',
    liveDemoLink: 'https://weatherrapk.netlify.app/',
  },
  {
    title: 'Netflix Clone LP',
    description: 'A clone of Netflix\'s landing page using ReactJS, showcasing skills in building modern, responsive web pages with dynamic content loading.',
    githubLink: 'https://github.com/Dinesh-m26/NetflixClone.git',
    liveDemoLink: 'https://flixn.netlify.app/',
  },
  {
    title: 'QR Maker',
    description: 'A QR code generator built with ReactJS, allowing users to create and download custom QR codes with ease.',
    githubLink: 'https://github.com/Dinesh-m26/qr.git',
    liveDemoLink: 'https://makeqrhere.netlify.app/',
  },
];

export const Project = () => {
  return (
    <div id='projects' className='w-full lg:w-2/3 mx-auto text-md px-4 lg:px-0'>
      <h1 className='text-[#90A0D9] text-3xl lg:text-5xl font-bold text-center py-7'>PROJECTS</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <div key={index} className='bg-gray-800 p-6 rounded-md shadow-lg text-white'>
            <h2 className='text-lg font-semibold mb-2 '>{project.title}</h2>
            <p className='text-blue-400 font-medium'>{project.description}</p>
            <div className='flex space-x-2 pt-4 '>
              <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                <FaGithub size={30} className='text-[#9b6666] transform transition-transform hover:scale-110' />
              </a>
              <a href={project.liveDemoLink} target='_blank' rel='noopener noreferrer'>
                <FaRegArrowAltCircleRight size={30} className='text-[#cccc73] transform transition-transform hover:scale-110' />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
