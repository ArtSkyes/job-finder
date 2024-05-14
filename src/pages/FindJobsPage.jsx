import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Search from '../components/Search';
import Jobs from '../components/Jobs';
import Spinner from '../components/Spinner';

const FindJobsPage = () => {

    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://json-server-vercel-sooty-two.vercel.app/jobs')
            .then(response => response.json())
            .then(data => {
                setJobs(data);
                setFilteredJobs(data);
            })
            .catch(error => {
                console.error("Error fetching jobs: ", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? <Spinner /> : (
                <>
                    <Search jobs={jobs} setFilteredJobs={setFilteredJobs} />
                    <Jobs jobs={filteredJobs} />
                </>
            )}
        </>
    )
}

export default FindJobsPage;