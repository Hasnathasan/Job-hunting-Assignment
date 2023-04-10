import React, { useEffect, useState } from 'react';
import HomeTitle from '../HomeTitlePage/HomeTitle';
import JobList from '../Job-List/JobList';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../Feature-Job/FeaturedJob';

const Main = () => {
    let jobQuantity = 4;
    const jobs = useLoaderData();
    const fourJobs = jobs.filter(job => job.id <= jobQuantity);
    const [jobCategory, setJobCategory] = useState([])
    useEffect( () => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setJobCategory(data))
    },[]);
    return (
        <div className="">
            <HomeTitle></HomeTitle>
            <div className="my-32 container mx-auto">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                    {
                        jobCategory.map(job => <JobList key={job.id} job={job}></JobList>)
                    }
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        fourJobs.map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                    }
                </div>
            </div>
            
            
        </div>
    );
};

export default Main;