import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { motion } from 'framer-motion';
import { fiverrJobs } from '../Fiverrmldeveloper';
import { upwork } from '../Upwork - Android Developer';
import FilterCard from './FilterCard';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { saveJobForLater } from '@/redux/jobSlice'; // Import the action

const Jobs = () => {
    const [selectedPlatform, setSelectedPlatform] = useState('freelancer');
    const platformData = selectedPlatform === 'freelancer' ? fiverrJobs : upwork;
    const dispatch = useDispatch();

    const handleSaveJob = (job) => {
        dispatch(saveJobForLater(job)); // Dispatch the job to save
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto mt-5">
                <div className="flex justify-between items-center mb-5">
                    <h1 className="text-2xl font-bold capitalize">{selectedPlatform}</h1>
                    <div className="space-x-4">
                        <button
                            onClick={() => setSelectedPlatform('freelancer')}
                            className={`px-4 py-2 rounded ${selectedPlatform === 'freelancer' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                        >
                            Freelancer
                        </button>
                        <button
                            onClick={() => setSelectedPlatform('upwork')}
                            className={`px-4 py-2 rounded ${selectedPlatform === 'upwork' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                        >
                            Upwork
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <FilterCard />
                    </div>
                    <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {platformData && platformData.length > 0 ? (
                            platformData.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.3 }}
                                    className="border rounded-lg p-4 shadow-md"
                                >
                                    <a href={job.Title_URL} target="_blank" rel="noopener noreferrer">
                                        <h3 className="font-bold text-lg mb-2">{job.Title}</h3>
                                    </a>
                                    <div className="flex items-center mb-2">
                                        <img
                                            src={job.Image || job.Avatar}
                                            alt="Profile"
                                            className="w-12 h-12 rounded-full mr-3"
                                        />
                                        <div>
                                            <a href={job.textbold_URL || job.Title_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">
                                                {job['1sz16f5k'] || job.Name}
                                            </a>
                                            <p className="text-sm">{job['1sz16f5k1'] || job.Location}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">Score: {job.Score || job.air3progresscircle}</p>
                                    <p className="text-sm text-gray-600 mb-2">Ratings: {job.ratingscount || job.air3poppertrigger}</p>
                                    <p className="text-lg font-semibold text-green-700">Price: {job.mt8 || `${job.Price} ${job.detailsitem}`}</p>
                                    {job.Image2 || job.Avatar9 ? (
                                        <img
                                            src={job.Image2 || job.Avatar9}
                                            alt="Gig Preview"
                                            className="w-full h-40 object-cover mt-3 rounded-md"
                                        />
                                    ) : null}
                                    <p className="text-sm mt-2">{job.Description ? `${job.Description.slice(0, 100)}...` : ''}</p>
                                    <Button className="bg-[#7209b7]" onClick={() => handleSaveJob(job)}>Save For Later</Button>
                                </motion.div>
                            ))
                        ) : (
                            <span>No jobs found</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
