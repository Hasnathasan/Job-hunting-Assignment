import React from 'react';
import manPic from '../../../public/All Images/P3OLGJ1 copy 1.png'

const HomeTitle = () => {
    return (
        <div className="bg-violet-50 px-5">
            <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 gap-5 justify-center items-center">
                <div className="order-1">
                    <h1 className="text-4xl sm:text-7xl leading-tight font-extrabold">One Step Closer To Your <span className="text-indigo-400">Dream Job</span></h1>
                    <p className="text-gray-500 my-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn border-none">Get Started</button>
                </div>
                <div className="-order-1 sm:order-2">
                    <img className="w-full" src={manPic} alt="" />
                </div>
            </div>
        </div>
        
    );
};

export default HomeTitle;