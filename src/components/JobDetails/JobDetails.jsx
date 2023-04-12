import React, { useEffect, useState } from "react";
import HTforJobDetails from "../HomeTitleOfJobDetails/HTforJobDetails";
import { Link, useLoaderData, useParams } from "react-router-dom";
import locationLogo from "../../../public/Icons/Frame-4.png";
import moneyLogo from "../../../public/Icons/Frame.png";
import emailLogo from "../../../public/Icons/Frame-3.png";
import jobLogo from "../../../public/Icons/Frame-1.png";
import phoneLogo from "../../../public/Icons/Frame-2.png";
import { addToDb } from "../../utilities/fakedb";

const JobDetails = () => {
  const data = useParams();
  const featuredJobs = useLoaderData();
  const [job, setJob] = useState({});
  useEffect(() => {
    if (featuredJobs) {
      const selectedJob = featuredJobs.find((job) => job.id == data.jobID);
      setJob(selectedJob);
    }
  }, []);
  const {
    id,
    jobDescription,
    jobresponsibility,
    eduRequirements,
    experiences,
    jobTitle,
    salary,
    email,
    phone,
    address,
  } = job;

  const addToDB = (id) => {
    addToDb(id);
  };
  return (
    <div>
      <HTforJobDetails></HTforJobDetails>
      <div className="container mx-auto my-28 px-5 gap-7 grid  grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2">
          <h5 className="text-base text-gray-500 my-6 font-semibold">
            <span className="text-lg text-slate-700 font-bold">
              Job Description:
            </span>{" "}
            {jobDescription}
          </h5>
          <h5 className="text-base text-gray-500 my-6 font-semibold">
            <span className="text-lg text-slate-700 font-bold">
              Job Responsibility:
            </span>{" "}
            {jobresponsibility}
          </h5>
          <h4 className="text-lg text-slate-700 font-bold">
            Educational Requirements:
          </h4>
          <h5 className="text-base text-gray-500 mb-6 font-semibold">
            {eduRequirements}
          </h5>
          <h4 className="text-lg text-slate-700 font-bold">Experiences:</h4>
          <h5 className="text-base text-gray-500 mb-6 font-semibold">
            {experiences}
          </h5>
        </div>
        <div className="md:col-span-1">
          <div className="bg-violet-50 p-5 mb-6 rounded-lg">
            <h3 className="text-xl text-slate-700 font-bold">Job Details</h3>
            <hr className="my-4 text-gray-600" />
            <div className="flex gap-2 my-2 items-center">
              <img src={moneyLogo} alt="" />
              <h4 className="text-lg font-semibold text-slate-700">
                Salary:{" "}
                <span className="text-lg font-semibold text-gray-500">
                  {salary} (Per Month)
                </span>
              </h4>
            </div>
            <div className="flex gap-2 my-2 items-center">
              <img src={jobLogo} alt="" />
              <h4 className="text-lg font-semibold text-slate-700">
                Job Title :{" "}
                <span className="text-lg font-semibold text-gray-500">
                  {jobTitle}
                </span>
              </h4>
            </div>
            <h3 className="text-xl text-slate-700 mt-7 font-bold">
              Contact Information:
            </h3>
            <hr className="my-4 text-gray-600" />
            <div className="flex gap-2 my-2 items-center">
              <img src={phoneLogo} alt="" />
              <h4 className="text-lg font-semibold text-slate-700">
                Phone:{" "}
                <span className="text-lg font-semibold text-gray-500">
                  {phone}
                </span>
              </h4>
            </div>
            <div className="flex gap-2 my-2 items-center">
              <img src={emailLogo} alt="" />
              <h4 className="text-lg font-semibold text-slate-700">
                Email:{" "}
                <span className="text-lg font-semibold text-gray-500">
                  {email}
                </span>
              </h4>
            </div>
            <div className="flex gap-2 my-2 items-center">
              <img src={locationLogo} alt="" />
              <h4 className="text-lg font-semibold text-slate-700">
                Address:{" "}
                <span className="text-lg font-semibold text-gray-500">
                  {address}
                </span>
              </h4>
            </div>
          </div>
          <button
            onClick={() => addToDB(id)}
            className="btn border-none capitalize text-lg w-full text-white"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
