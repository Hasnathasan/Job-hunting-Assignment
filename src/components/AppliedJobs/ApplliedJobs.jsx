import React, { useEffect, useState } from "react";
import { getfeaturedJob } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import RenderJob from "../RenderAppliedJobs/RenderJob";

const ApplliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const featuredJobs = useLoaderData();
  const localJobsId = getfeaturedJob();
  useEffect(() => {
    const selectedJobs = [];
    for (const id in localJobsId) {
      const job = featuredJobs.find((job) => job.id == id);
      selectedJobs.push(job);
    }
    setAppliedJobs(selectedJobs);
  }, []);

  return (
    <div>
      <div className="bg-violet-50 py-10">
        <h2 className="text-3xl text-center font-bold">Applied Jobs</h2>
      </div>
      <div className="container mx-auto px-5 grid grid-cols-1 my-14 gap-10 flex-col items-center justify-center">
        {appliedJobs.map((job) => (
          <RenderJob key={job.id} job={job}></RenderJob>
        ))}
      </div>
    </div>
  );
};

export default ApplliedJobs;
