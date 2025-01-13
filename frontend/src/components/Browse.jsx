import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';

const Browse = () => {
    useGetAllJobs();
    const { savedJobs } = useSelector((store) => store.job); // Get the saved jobs from Redux
    const dispatch = useDispatch();

    // Handle potential undefined or null savedJobs
    const jobsToDisplay = savedJobs && Array.isArray(savedJobs) ? savedJobs : []; // Ensure savedJobs is an array

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(''));
        };
    }, [dispatch]);

    return (
        <div>
            <Navbar />  
            <div className="max-w-7xl mx-auto my-10">
                <h1 className="font-bold text-xl my-10">
                    Saved Freelancer ({jobsToDisplay.length})
                </h1>
                <div className="grid grid-cols-3 gap-4">
                    {jobsToDisplay.length > 0 ? (
                        jobsToDisplay.map((job) => (
                            <Job key={job._id} job={job} />
                        ))
                    ) : (
                        <p>No saved jobs available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Browse;
