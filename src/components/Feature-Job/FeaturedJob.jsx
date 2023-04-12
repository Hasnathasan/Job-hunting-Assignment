import React from 'react';
import locationLogo from '../../../public/Icons/Frame-4.png'
import moneyLogo from '../../../public/Icons/Frame.png'
import { Link } from 'react-router-dom';

const FeaturedJob = ({job}) => {
    const {id, jobTitle, company, companyPhoto, jobtype, address, salary} = job;
    return (
        <div className="border border-slate-200 p-9 rounded-lg">
            <img className="mb-5 h-9" src={companyPhoto} alt="" />
            <h3 className="text-2xl font-bold my-3">{jobTitle}</h3>
            <h4 className="text-lg text-gray-600 font-semibold mb-2">{company}</h4>
            <div className="my-5">
                {
                    jobtype.map(job => <span key={jobtype.indexOf(job)} className="px-2 mr-2 py-1 text-base text-violet-500 font-bold border border-violet-400 rounded">{job}</span>)
                }
            </div>
            <div className="flex  text-base md:text-lg text-gray-500 font-semibold items-center gap-4">
                <div className="flex items-center  gap-2">
                    <img src={locationLogo} alt="" />
                    <h4>{address}</h4>
                </div>
                <div className="flex items-center  gap-2">
                    <img src={moneyLogo} alt="" />
                    <h4>{salary}</h4>
                </div>
            </div>
            <Link to={`/jobDetails/${id}`}>
                <button className="btn border-none text-lg capitalize rounded text-white mt-5">View Details</button>
            </Link>
        </div>
    );
};

export default FeaturedJob;