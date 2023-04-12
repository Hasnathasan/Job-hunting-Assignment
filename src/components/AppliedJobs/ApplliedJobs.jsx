import React, { useEffect, useState } from "react";
import { getfeaturedJob } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import RenderJob from "../RenderAppliedJobs/RenderJob";

const ApplliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [jobWithType, setJobWithType] = useState([])
  const featuredJobs = useLoaderData();
  const localJobsId = getfeaturedJob();
  useEffect(() => {
    const selectedJobs = [];
    for (const id in localJobsId) {
      const job = featuredJobs.find((job) => job.id == id);
      selectedJobs.push(job);
    }
    setAppliedJobs(selectedJobs);
    setJobWithType(selectedJobs)
  }, []);
  const filterByValue = (event) => {
    const type = event.target.value;
    if(type == "remote"){
        const remoteJobs = appliedJobs.filter(job => job.jobtype[0] == type);
        setJobWithType(remoteJobs);
    }
    else if(type == "onsite"){
        const onsiteJobs = appliedJobs.filter(job => job.jobtype[0] == type);
        setJobWithType(onsiteJobs);
    }
  }
  return (
    <div>
      <div className="bg-violet-50 py-10">
        <h2 className="text-3xl text-center font-bold">Applied Jobs</h2>
      </div>
      <div className="container mx-auto mt-3 text-right">
      <select className="select border border-slate-500 w-28" onChange={filterByValue}>
        <option disabled selected>Filter by</option>
        <option value="remote">Remote</option>
        <option value="onsite">Onsite</option>
      </select>
      </div>
      <div className="container mx-auto px-5 grid grid-cols-1 my-14 gap-10 flex-col items-center justify-center">
        {jobWithType.map((job) => (
          <RenderJob key={job.id} job={job}></RenderJob>
        ))}
      </div>
    </div>
  );
};

export default ApplliedJobs;
