import React from 'react';
import { motion } from 'framer-motion';
import { fiverrJobs } from '../Fiverrmldeveloper';

const LatestJobs = () => {
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'>
                <span className='text-[#6A38C2]'> Top </span> Freelancers
            </h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {fiverrJobs.length <= 0 ? (
                    <span>No Job Available</span>
                ) : (
                    fiverrJobs.slice(0, 6).map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.3 }}
                            className='border rounded-lg p-4 shadow-md'
                        >
                            <a href={job.Title_URL} target='_blank' rel='noopener noreferrer'>
                                <h3 className='font-bold text-lg mb-2'>{job.Title}</h3>
                            </a>
                            <div className='flex items-center mb-2'>
                                <img
                                    src={job.Image}
                                    alt='Profile'
                                    className='w-12 h-12 rounded-full mr-3'
                                />
                                <div>
                                    <a
                                        href={job.textbold_URL}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='font-semibold text-blue-600 hover:underline'
                                    >
                                        {job['1sz16f5k']}
                                    </a>
                                    <p className='text-sm'>{job['1sz16f5k1']}</p>
                                </div>
                            </div>
                            <p className='text-sm text-gray-600 mb-2'>Score: {job.Score}</p>
                            <p className='text-sm text-gray-600 mb-2'>
                                Ratings: {job.ratingscount}
                            </p>
                            <p className='text-lg font-semibold text-green-700'>
                                Price: {job.mt8}
                            </p>
                            <img
                                src={job.Image2}
                                alt='Gig Preview'
                                className='w-full h-40 object-cover mt-3 rounded-md'
                            />
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
};

export default LatestJobs;
