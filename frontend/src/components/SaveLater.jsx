// pages/save-later.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { removeJob } from '@/redux/jobSlice'; // Import remove job action

const SaveLater = () => {
    const savedJobs = useSelector((state) => state.jobs.savedJobs); // Get saved jobs from Redux
    const dispatch = useDispatch();

    const handleRemoveJob = (job) => {
        dispatch(removeJob(job)); // Dispatch to remove the job
    };

    return (
        <div className="max-w-7xl mx-auto mt-5">
            <h1 className="text-2xl font-bold">Saved Jobs</h1>
            {savedJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                    {savedJobs.map((job, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow-md">
                            <h3 className="font-bold text-lg mb-2">{job.Title}</h3>
                            <Button className="bg-red-500" onClick={() => handleRemoveJob(job)}>Remove</Button>
                        </div>
                    ))}
                </div>
            ) : (
                <span>No saved jobs</span>
            )}
        </div>
    );
};

export default SaveLater;
