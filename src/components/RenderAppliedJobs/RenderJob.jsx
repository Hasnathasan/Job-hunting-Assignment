import React from "react";
import locationLogo from "../../../public/Icons/Frame-4.png";
import moneyLogo from "../../../public/Icons/Frame.png";
import { Link } from "react-router-dom";

const RenderJob = ({ job }) => {
  const { companyPhoto, company, jobTitle, salary, jobtype, address, id } =
    job;
  return (
    <div className="flex border md:w-3/4 items-center border-slate-300 p-4 mx-auto gap-3">
      <div className="bg-slate-100 h-max p-1 md:py-16 md:px-10 rounded-lg flex items-center">
        <img className="w-32" src={companyPhoto} alt="" />
      </div>
      <div>
        <h3 className="text-base md:text-xl font-bold text-slate-700">{jobTitle}</h3>
        <h4 className="text-xs md:text-base my-2  font-semibold text-slate-500">
          {company}
        </h4>
        {jobtype.map((job) => (
          <span
            key={jobtype.indexOf(job)}
            className="px-2 mr-2 py-1 text-xs md:text-base text-violet-500 font-bold border border-violet-400 rounded"
          >
            {job}
          </span>
        ))}
        <div className="flex text-xs md:text-base mt-3 text-gray-500 font-semibold items-center gap-4">
          <div className="flex items-center  gap-2">
            <img src={locationLogo} alt="" />
            <h4>{address}</h4>
          </div>
          <div className="flex items-center  gap-2">
            <img src={moneyLogo} alt="" />
            <h4>{salary}</h4>
          </div>
        </div>
      </div>
      <div className="ml-auto">
      <Link to={`/jobDetails/${id}`}>
                <button className="btn border-none text-xs p-1 md:p-3  md:text-lg capitalize rounded text-white mt-5">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default RenderJob;
