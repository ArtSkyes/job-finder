import React, { useContext } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box, Typography } from '@mui/material';
import { JobsContext } from '../contexts/JobContext';

const schema = yup.object({
    company: yup.string().required('Company name is required'),
    title: yup.string().required('Job title is required'),
    description: yup.string().required('Description is required'),
}).required();

const CreateJobPage = () => {
    const { createJobs } = useContext(JobsContext);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const mutation = useMutation({
        mutationFn: createJobs,
        onSuccess: () => {
            queryClient.invalidateQueries(['jobs']);
            toast.success('Job Created Successfully');
            navigate('/');
        },
        onError: (error) => {
            toast.error(`Error: ${error.message}`);
        }
    });

    const onSubmit = data => {
        mutation.mutate(data);
    };

    return (
        <Box sx={{ bgcolor: 'grey.100', p: 6 }}>
            <Box sx={{ maxWidth: 600, mx: 'auto', bgcolor: 'background.paper', boxShadow: 3, p: 4, borderRadius: 2 }}>
                <Typography variant="h4" component="h2" textAlign="center" mb={3}>
                    Create a Job
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        fullWidth
                        label="Company Name"
                        variant="outlined"
                        margin="normal"
                        {...register('company')}
                        error={!!errors.company}
                        helperText={errors.company?.message}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Job Type</InputLabel>
                        <Select
                            defaultValue="Full-Time"
                            label="Job Type"
                            {...register('type')}
                        >
                            <MenuItem value="Full-Time">Full-Time</MenuItem>
                            <MenuItem value="Part-Time">Part-Time</MenuItem>
                            <MenuItem value="Contract">Contract</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Job Title"
                        variant="outlined"
                        margin="normal"
                        {...register('title')}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Level</InputLabel>
                        <Select
                            defaultValue="Senior Level"
                            label="Level"
                            {...register('level')}
                        >
                            <MenuItem value="Senior Level">Senior Level</MenuItem>
                            <MenuItem value="Mid-Senior Level">Mid-Senior Level</MenuItem>
                            <MenuItem value="Entry Level">Entry Level</MenuItem>
                            <MenuItem value="Internship">Internship</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Description"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        {...register('description')}
                        error={!!errors.description}
                        helperText={errors.description?.message}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, py: 1, fontSize: 16, borderRadius: 3, fontWeight: 600 }}
                    >
                        Create Job
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default CreateJobPage;
