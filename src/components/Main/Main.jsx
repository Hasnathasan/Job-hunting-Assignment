import React, { useEffect, useState } from 'react';
import HomeTitle from '../HomeTitlePage/HomeTitle';
import JobList from '../Job-List/JobList';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../Feature-Job/FeaturedJob';

let jobQuantity = 4;
const Main = () => {
    const [featuredJobs, setFeaturedJobs] = useState([])
    const jobs = useLoaderData();
    const showAll = () => {
        setFeaturedJobs(jobs)
    }
    useEffect(() => {
        const Jobs = jobs.filter(job => job.id <= jobQuantity);
        setFeaturedJobs(Jobs);
    },[])
    

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
                
                <div className="grid grid-cols-1 p-4 md:p-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                    {
                        jobCategory.map(job => <JobList key={job.id} job={job}></JobList>)
                    }
                </div>
            </div>
            <div className="container mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        featuredJobs.map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                    }
                </div>
                <div className="text-center">
                    <button onClick={showAll} className={featuredJobs.length === 6 ? "hidden" : "btn border-none text-white mt-5"}>Show More</button>
                </div>
            </div>
            
            
        </div>
    );
};

export default Main;