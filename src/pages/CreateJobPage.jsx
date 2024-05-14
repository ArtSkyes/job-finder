import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { JobsContext } from '../contexts/JobContext';

const CreateJobPage = () => {

    const [company, setCompany] = useState('');
    const [type, setType] = useState('Full-Time');
    const [title, setTitle] = useState('');
    const [level, setLevel] = useState('Senior Level');
    const [description, setDescription] = useState('');
    const { createJobs } = useContext(JobsContext);

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        const newJob = {
            title,
            level,
            type,
            description,
            company,
        };

        createJobs(newJob);

        toast.success('Job Created Successfully');

        return navigate('/');
    };

    return (
        <section className="bg-greyIsh">
            <div className="container m-auto max-w-2xl py-24">
                <div
                    className="bg-white px-6 py-8 mb-4 shadow-lg shadow-greyIsh-700 rounded-[10px] border m-4 md:m-0"
                >
                    <form onSubmit={submitForm}>
                        <h2 className="text-3xl text-center font-semibold mb-6">
                            Create a Job
                        </h2>

                        <div className="mb-4">
                            <label htmlFor="company" className="block text-gray-700 font-bold mb-2">
                                Company Name
                            </label
                            >
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="border rounded w-full py-2 px-3"
                                placeholder="Company Name"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div >

                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                                Job Type
                            </label>
                            <select
                                id="type"
                                name="type"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2"
                            >Job Title</label
                            >
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="eg. Software Engineer"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 font-bold mb-2'>
                                Level
                            </label>
                            <select
                                id="level"
                                name="Level"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                            >
                                <option value="Senior Level">Senior Level</option>
                                <option value="Mid-Senior Level">Mid-Senior Level</option>
                                <option value="Entry Level">Entry Level</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="What does your company do?"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white  text-[16px] font-semibold py-2 px-4 rounded-[10px] w-full focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Create Job
                            </button>
                        </div>
                    </form >
                </div >
            </div >
        </section >
    )
}

export default CreateJobPage;