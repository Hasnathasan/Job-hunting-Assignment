import React from 'react';

const JobList = ({job}) => {
    const {id, img, category, available} = job;
    return (
        <div className="bg-violet-50 p-8 rounded-lg">
            <img className="bg-slate-200 w-14 h-14 mb-3 p-3 rounded" src={img} alt="" />
            <h3 className="text-lg text-gray-600 sm:text-xl font-bold">{category}</h3>
            <h4 className="text-sm sm:text-base text-gray-500 mt-1 font-medium">{available} jobs Available</h4>
        </div>
    );
};

export default JobList;