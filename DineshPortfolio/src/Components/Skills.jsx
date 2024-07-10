import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiCanva } from 'react-icons/si';

const skillData = [
    { name: 'HTML', icon: <FaHtml5 className="text-4xl text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-4xl text-teal-400" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-4xl text-purple-600" /> },
    { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-500" /> },
    { name: 'ReactJS', icon: <FaReact className="text-4xl text-blue-400" /> },
    { name: 'Redux', icon: <SiRedux className="text-4xl text-purple-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-4xl text-orange-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-4xl text-black" /> },
    { name: 'Canva', icon: <SiCanva className="text-4xl text-blue-400" /> },
];

export const Skills = () => {
    return (
        <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-10">
            <h1 className='text-white text-3xl lg:text-5xl font-bold text-center pb-8'>SKILLS</h1>
            <div className='flex flex-wrap gap-8 justify-center w-full lg:w-2/3 mx-auto px-4'>
                {skillData.map((skill, index) => (
                    <div key={index} className='flex flex-col items-center transform transition-transform hover:scale-110'>
                        <div className="bg-[#1E293B] p-6 rounded-full shadow-lg">
                            {skill.icon}
                        </div>
                        <h3 className='text-white mt-4'>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
