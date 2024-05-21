import React, { useState } from 'react';
import Modal from './Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
            <div className="flex flex-wrap justify-center gap-10 py-10 items-start">
                {jobs.map((job) => {
                    let description = job.description;
                    if (!descriptionState[job.id]) {
                        description = description.substring(0, 90) + '...';
                    }

                    return (
                        <Card key={job.id} className="group group/item singleJob w-[250px] p-[5px] bg-white rounded-[10px] hover:bg-blue-800 flex flex-col" elevation={3}>
                            <CardContent>
                                <Typography variant="h6" component="div" className="text-[18px] text-textColor group-hover:text-white font-bold">
                                    {job.company}
                                </Typography>
                                <Typography variant="h7" className="text-[#ccc] pb-4">{job.level}</Typography><br />
                                <Typography variant="h8" className="text-[#ccc] pb-4">{job.type}</Typography>
                                <Typography variant="body2" className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]  group-hover:text-white mb-auto">
                                    {description}
                                    <Button size="small" onClick={() => handleDescriptionClick(job)} className="text-[15px] text-left text-blue-400 mt-2 mb-2 hover:text-blue-500" aria-label="Toggle Description">
                                        {descriptionState[job.id] ? 'Less' : 'More'}
                                    </Button>
                                </Typography>
                                <Typography variant="title" className='items-center gap-2 text-[15px] font-extrabold py-[1rem] block group-hover:text-white'>
                                    {job.title}
                                </Typography>
                                <Button variant="contained" onClick={() => openModal(job)} className="border-[2px] rounded-[10px] text-center block p-[10px] w-full group-hover:text-white" aria-label="Learn More About Job">
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
            {selectedJob && <Modal job={selectedJob} closeModal={closeModal} />}
        </div>
    );
}

export default Jobs;
