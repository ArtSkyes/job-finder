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

    const updateJobs = (id, updatedJobs) => {
        fetch(`/api/jobs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedJobs),
        })
            .then(response => response.json())
            .then(() => {
                const updatedJobs = jobs.map(jobs => jobs.id === id ? updatedJobs : jobs);
                setJobs(updatedJobs);
            })
            .catch(error => console.error('Error updating jobs:', error));
    };

    const deleteJobs = (id) => {
        fetch(`/api/jobs/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                const filteredJobs = jobs.filter(jobs => jobs.id !== id);
                setJobs(filteredJobs);
            })
            .catch(error => console.error('Error deleting jobs:', error));
    };

    return (
        <JobsContext.Provider value={{ jobs, createJobs, updateJobs, deleteJobs }}>
            {children}
        </JobsContext.Provider>
    );
};