import React, { useEffect, useState } from 'react';
import { getfeaturedJob } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
import RenderJob from '../RenderAppliedJobs/RenderJob';

const ApplliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    const featuredJobs = useLoaderData();
    const localJobsId = getfeaturedJob();
    const selectedJobs = [];
    useEffect( () => {
        if(localJobsId){
            for(const id in localJobsId){
                const allreadyAdded = appliedJobs.find(job => job.id == id)
                console.log(allreadyAdded);
                if(!allreadyAdded){
                    const job = featuredJobs.find(job => job.id == id);
                    selectedJobs.push(job)
                }
        }

        }
    setAppliedJobs(selectedJobs);
    },[])
    
    // console.log(appliedJobs);
    return (
        <div>
            <div className="bg-violet-50 py-10"></div>
            <h2 className="text-3xl text-center font-bold">Applied Jobs</h2>
            {
                appliedJobs.map(job => <RenderJob key={job.id} job={job}></RenderJob>)
            }
        </div>
    );
};

export default ApplliedJobs;