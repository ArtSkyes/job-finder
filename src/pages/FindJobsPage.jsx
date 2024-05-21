import React from 'react';
import { useQuery } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';
import Search from '../components/Search';
import Jobs from '../components/Jobs';
import Spinner from '../components/Spinner';
import { config } from '../services/config';

const fetchJobs = async () => {
    const response = await fetch(`${config.API_URL}/jobs`);
    if (!response.ok) {
        throw new Error('Failed to fetch jobs');
    }
    return response.json();
};

const FindJobsPage = () => {
    const { data: jobs, isLoading, error } = useQuery({
        queryKey: ['jobs'],
        queryFn: fetchJobs
    });
    const [filteredJobs, setFilteredJobs] = React.useState([]);

    if (isLoading) return <Spinner />;
    if (error) return <div>Error fetching jobs: {error.message}</div>;

    return (
        <>
            <Search jobs={jobs} setFilteredJobs={setFilteredJobs} />
            <Jobs jobs={filteredJobs.length > 0 ? filteredJobs : jobs} />
        </>
    );
}

export default FindJobsPage;