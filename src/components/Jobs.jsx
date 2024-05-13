import React from 'react'
import logo_1 from '../assets/images/logo_1.png';

const Jobs = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

                <div className='group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] 
                hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

                    <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[20px] font-semibold text-textColor group-hover:text-white'>
                            Web Developer
                        </h1>
                    </span>

                    <h6 className='text-[#ccc] text-[15px]'>Internship Level</h6>

                    <h6 className='text-[#ccc] text-[14px]'>Full-Time</h6>

                    <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                        WireCast Go is a leading technology company based in Canada, specializing in web development, digital marketing, and software solutions.
                        We are seeking a talented and passionate Web Developer to join our dynamic team.
                    </p>

                    <div className='company flex items-center gap-2'>
                        <img src={logo_1} alt="Company Logo" className='w-[10%]' />
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>
                            WireCast Go
                        </span>
                    </div>

                    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor 
                    hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                        Apply Now
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Jobs;