import React, { createContext, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { config } from '../services/config';
import Spinner from '../components/Spinner';

export const JobsContext = createContext();

const jobSchema = yup.object({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required")
});

export const JobsProvider = ({ children }) => {
    const [filteredJobs, setFilteredJobs] = useState([]);
    const queryClient = useQueryClient();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(jobSchema)
    });

    const { data: jobs, error, isLoading } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const response = await fetch(`${config.API_URL}/jobs`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });

    const createJobMutation = useMutation({
        mutationFn: async (newJob) => {
            const response = await fetch(`${config.API_URL}/jobs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newJob),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['jobs']);
        },
    });

    const deleteJobMutation = useMutation({
        mutationFn: async (id) => {
            const response = await fetch(`${config.API_URL}/jobs/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return id;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['jobs']);
        },
    });

    const createJobs = (newJob) => {
        createJobMutation.mutate(newJob);
    };

    const deleteJob = (id) => {
        deleteJobMutation.mutate(id);
    };

    if (isLoading) return <Spinner />;
    if (error) return <div>An error occurred: {error.message}</div>;

    return (
        <JobsContext.Provider value={{ jobs, filteredJobs, setFilteredJobs, createJobs, deleteJob, register, handleSubmit, errors, reset }}>
            {children}
        </JobsContext.Provider>
    );
};
