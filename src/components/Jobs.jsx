import React, { useState } from 'react';
import Modal from './Modal';

const Jobs = ({ jobs }) => {

    const [selectedJob, setSelectedJob] = useState(null);
    const [descriptionState, setDescriptionState] = useState({});

    const openModal = (job) => {
        setSelectedJob(job);
    };

    const closeModal = () => {
        setSelectedJob(null);
    };

    const handleDescriptionClick = (job) => {
        setDescriptionState(prevState => ({
            ...prevState,
            [job.id]: !prevState[job.id]
        }));
    };

    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                {jobs.map((job) => {
                    let description = job.description;

                    if (!descriptionState[job.id]) {
                        description = description.substring(0, 90) + '...';
                    }

                    return (
                        <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] 
                        hover:bg-blue-800 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg flex flex-col' key={job.id}>

                            <span className='flex justify-between items-center gap-4'>
                                <h1 className='text-[18px] font-semibold text-textColor group-hover:text-white'>
                                    {job.company}
                                </h1>
                            </span>

                            <h5 className='text-[#ccc] '>{job.level}</h5>

                            <h6 className='text-[#ccc] '>{job.type}</h6>

                            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white mb-auto'>
                                {description}
                            </p>

                            <button onClick={() => handleDescriptionClick(job)} className='text-[15px] text-left text-blue-400 mt-2 mb-2 hover:text-blue-500'>
                                {descriptionState[job.id] ? 'Less' : 'More'}
                            </button>

                            <div className='company flex items-center gap-2'>
                                <span className='text-[15px] font-semibold py-[1rem] block group-hover:text-white'>
                                    {job.title}
                                </span>
                            </div>

                            <button onClick={() => openModal(job)} className='border-[2px] rounded-[10px] text-center block p-[10px] w-full text-[14px] font-semibold text-textColor 
                            hover:bg-blue-700 group-hover/item:text-textColor group-hover:text-white'>
                                Learn More
                            </button>

                        </div>
                    )
                })}
            </div>
            {selectedJob && <Modal job={selectedJob} closeModal={closeModal} />}
        </div>
    )
}

export default Jobs;