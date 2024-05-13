import React, { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
    const [jobSearch, setJobSearch] = useState('');
    const [type, setType] = useState('Full-Time');
    const [level, setLevel] = useState('Entry Level');

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    const handleButtonClick = (setField) => {
        setField('');
    };

    return (
        <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
            <form onSubmit={handleFormSubmit}>
                <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">

                    <div className='flex gap-2 items-center p-5 w-full'>
                        <AiOutlineSearch className='text-[25px] icon' />
                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none flex-grow w-full'
                            placeholder='Search Job Here...' value={jobSearch} onChange={(e) => setJobSearch(e.target.value)} />
                        <div className='w-[30px]'>
                            {jobSearch && <AiOutlineCloseCircle className='text-[25px] text-[#a5a6a6] hover:text-textColor icon' onClick={() => handleButtonClick(setJobSearch)} />}
                        </div>
                    </div>

                    <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>
                        Search
                    </button>

                </div>

            </form>

            <div className='secDiv flex items-center gap-10 justify-center'>

                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='type' className='text-[#808080] font-semibold'> Type:</label>

                    <select id="type" name="relevance" className='bg-white rounded-[3px] px-4 py-1' value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </div>

                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='level' className='text-[#808080] font-semibold'>
                        Level:
                    </label>

                    <select name="relevance" id="level" className='bg-white rounded-[3px] px-4 py-1' value={level} onChange={(e) => setLevel(e.target.value)}>
                        <option value="Senior Level">Senior Level</option>
                        <option value="Mid-Senior Level">Mid-Senior Level</option>
                        <option value="Entry Level">Entry Level</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Search;