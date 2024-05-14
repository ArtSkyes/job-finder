import React, { createContext, useState, useEffect } from 'react';

export const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/api/jobs')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    const createJobs = async (newJob) => {
        const res = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob),
        })
            .then(response => response.json())
            .then(newJob => setJobs([...jobs, newJob]))
            .catch(error => console.error('Error adding jobs:', error));
    };

    const deleteJob = async (id) => {
        const res = await fetch(`/api/jobs/${id}`, {
            method: 'DELETE',
        });
        setJobs(jobs.filter(job => job.id !== id));
    };

    return (
        <JobsContext.Provider value={{ jobs, createJobs, deleteJob }}>
            {children}
        </JobsContext.Provider>
    );
};