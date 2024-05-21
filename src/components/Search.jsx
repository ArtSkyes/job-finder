import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';

const Search = ({ jobs, setFilteredJobs }) => {
    const { register, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            jobSearch: '',
            type: 'All',
            level: 'All',
            company: '',
            title: ''
        }
    });

    const type = watch('type');
    const level = watch('level');
    const company = watch('company');
    const title = watch('title');



    React.useEffect(() => {
        const filtered = jobs.filter(job =>
            (type !== "All" ? job.type === type : true) &&
            (level !== "All" ? job.level === level : true) &&
            (company ? job.company === company : true) &&
            (title ? job.title === title : true)
        );
        setFilteredJobs(filtered);
    }, [type, level, company, title, jobs, setFilteredJobs]);

    const onSearch = (data) => {
        const { jobSearch, company, title } = data;
        const filtered = jobs.filter(job =>
            (jobSearch ? Object.values(job).some(val =>
                val.toString().toLowerCase().includes(jobSearch.toLowerCase())
            ) : true) &&
            (company ? job.company === company : true) &&
            (title ? job.title === title : true)
        );
        setFilteredJobs(filtered);
    };

    const handleButtonClear = () => {
        reset({
            jobSearch: '',
            type: 'All',
            level: 'All',
            company: '',
            title: ''
        });
    };

    return (
        <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
            <form onSubmit={handleSubmit(onSearch)}>
                <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
                    <div className='flex gap-2 items-center p-5 w-full'>
                        <AiOutlineSearch className='text-[25px] icon' />
                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none flex-grow w-full'
                            placeholder='Search Job Here...' {...register('jobSearch')} />
                        <div className='w-[30px]'>
                            <AiOutlineCloseCircle className='text-[25px] text-[#a5a6a6] hover:text-textColor icon' onClick={handleButtonClear} />
                        </div>
                    </div>
                    <button type="submit" className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>
                        Search
                    </button>
                </div>
            </form>
            <div className='secDiv flex items-center gap-10 justify-center'>
                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='type' className='text-[#808080] font-semibold'> Type:</label>
                    <select {...register('type')} className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="All">All</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>
                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='level' className='text-[#808080] font-semibold'> Level:</label>
                    <select {...register('level')} className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="All">All</option>
                        <option value="Senior Level">Senior Level</option>
                        <option value="Mid-Senior Level">Mid-Senior Level</option>
                        <option value="Entry Level">Entry Level</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Search;
