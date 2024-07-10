import React from 'react';

export const Education = () => {
    return (
        <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-10">
            <div className='w-full lg:w-2/3 mx-auto text-md px-4 lg:px-0'>
                <h1 className='text-white text-3xl lg:text-5xl font-bold text-center py-7'>EDUCATION</h1>
                <div className="grid gap-6">
                    <div className="bg-gray-800 rounded-lg p-6 lg:p-8">
                        <h2 className="text-lg lg:text-xl font-semibold text-white">Bachelor of Technology in Electronics and Communication Engineering</h2>
                        <p className="text-gray-300">Adhiyamaan College of Engineering, Hosur</p>
                        <p className="text-gray-300">Year of Passing: 2024</p>
                        <p className="text-blue-400">CGPA: 7.7/10</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 lg:p-8">
                        <h2 className="text-lg lg:text-xl font-semibold text-white">High School (12th Grade)</h2>
                        <p className="text-gray-300">Maharishi Matric Higher Secondary School, Krishnagiri</p>
                        <p className="text-gray-300">Year of Passing: 2020</p>
                        <p className="text-blue-400">Percentage: 56%</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-6 lg:p-8">
                        <h2 className="text-lg lg:text-xl font-semibold text-white">High School (10th Grade)</h2>
                        <p className="text-gray-300">Bharat Matric Higher Secondary School, Krishnagiri</p>
                        <p className="text-gray-300">Year of Passing: 2018</p>
                        <p className="text-blue-400">Percentage: 87%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

