import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box, Grid } from '@mui/material';

const schema = yup.object({
    jobSearch: yup.string(),
    type: yup.string(),
    level: yup.string(),
    company: yup.string(),
    title: yup.string()
});

const Search = ({ jobs, setFilteredJobs }) => {
    const queryClient = useQueryClient();
    const { register, handleSubmit, reset, watch } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues: {
            jobSearch: '',
            type: 'All',
            level: 'All',
            company: '',
            title: ''
        }
    });

    const jobSearch = watch('jobSearch');

    const handleButtonClear = () => {
        reset({
            jobSearch: '',
            type: 'All',
            level: 'All',
            company: '',
            title: ''
        });
        queryClient.invalidateQueries(['filteredJobs']);
        setFilteredJobs(jobs);
    };

    const handleFormSubmit = (data) => {
        const filteredJobs = jobs.filter(job => {
            return (
                (data.jobSearch ? Object.values(job).some(val => typeof val === 'string' && val.toLowerCase().includes(data.jobSearch.toLowerCase())) : true) &&
                (data.type !== "All" ? job.type === data.type : true) &&
                (data.level !== "All" ? job.level === data.level : true) &&
                (data.company ? job.company.toLowerCase().includes(data.company.toLowerCase()) : true) &&
                (data.title ? job.title.toLowerCase().includes(data.title.toLowerCase()) : true)
            );
        });

        setFilteredJobs(filteredJobs);
    };

    return (
        <Box sx={{ p: 3, bgcolor: '#f1f4f8', borderRadius: 3, width: '100%', maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ p: 3, bgcolor: 'white', borderRadius: 3, boxShadow: 4 }}>                    <Grid item xs={12} sm={8} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <AiOutlineSearch size={25} />
                    <TextField
                        fullWidth
                        placeholder='Search Job Here...'
                        {...register('jobSearch')}
                    />
                    {jobSearch && (
                        <AiOutlineCloseCircle size={25} onClick={handleButtonClear} style={{ cursor: 'pointer', color: '#a5a6a6' }} />
                    )}
                </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Search
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="type-label">Type</InputLabel>
                            <Select
                                labelId="type-label"
                                label="Type"
                                {...register('type')}
                                defaultValue="All"
                            >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Full-Time">Full-Time</MenuItem>
                                <MenuItem value="Part-Time">Part-Time</MenuItem>
                                <MenuItem value="Contract">Contract</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="level-label">Level</InputLabel>
                            <Select
                                labelId="level-label"
                                label="Level"
                                {...register('level')}
                                defaultValue="All"
                            >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="Senior Level">Senior Level</MenuItem>
                                <MenuItem value="Mid-Senior Level">Mid-Senior Level</MenuItem>
                                <MenuItem value="Entry Level">Entry Level</MenuItem>
                                <MenuItem value="Internship">Internship</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default Search;