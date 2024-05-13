import React, { useState, useEffect } from 'react';
import Modal from './Modal';


const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('/api/jobs')
            .then(response => response.json())
            .then(data => setJobs(data));
    }, []);

    const openModal = (job) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                {jobs.map((job) => (
                    <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] 
                    hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg flex flex-col' key={job.id}>

                        <span className='flex justify-between items-center gap-4'>
                            <h1 className='text-[18px] font-semibold text-textColor group-hover:text-white'>
                                {job.company}
                            </h1>
                        </span>

                        <h5 className='text-[#ccc] '>{job.level}</h5>

                        <h6 className='text-[#ccc] '>{job.type}</h6>

                        <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white mb-auto'>
                            {job.description}
                        </p>

                        <div className='company flex items-center gap-2'>
                            <span className='text-[15px] font-semibold py-[1rem] block group-hover:text-white'>
                                {job.title}
                            </span>
                        </div>

                        <button onClick={() => openModal(job)} className='border-[2px] rounded-[10px] text-center block p-[10px] w-full text-[14px] font-semibold text-textColor 
                        hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
                            Learn More
                        </button>

                    </div>
                ))}
            </div>
            {isModalOpen && <Modal job={selectedJob} closeModal={closeModal} />}
        </div>
    )
}

export default Jobs;