import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';

const Search = () => {
    return (
        <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
            <form action="" >
                <div className="firstDiv flex justify-between items-center rounded-[8px] 
                gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">

                    <div className='flex gap-2 items-center'>
                        <AiOutlineSearch className='text-[25px] icon' />
                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                            placeholder='Search Job Here...' />
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                    </div>

                    <div className='flex gap-2 items-center'>
                        <BsHouseDoor className='text-[25px] icon' />
                        <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
                            placeholder='Search By Company...' />
                        <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
                    </div>

                    <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white 
                    cursor-pointer hover:bg-blue-300'>Search</button>

                </div>

            </form>

            <div className='secDiv flex items-center gap-10 justify-center'>

                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='type' className='text-[#808080] font-semibold'> Type:</label>

                    <select name="relevance" id="type" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Full-time</option>
                        <option value="">Part-time</option>
                        <option value="">Internship</option>
                        <option value="">Contract</option>
                    </select>
                </div>

                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor='level' className='text-[#808080] font-semibold'>
                        Level:
                    </label>

                    <select name="relevance" id="level" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Senior</option>
                        <option value="">Mid-Senior</option>
                        <option value="">Associate</option>
                        <option value="">Entry</option>
                    </select>
                </div>


            </div>
        </div>
    )
}

export default Search;