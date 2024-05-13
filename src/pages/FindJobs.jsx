import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Jobs from '../components/Jobs';

const FindJobs = () => {
    return (
        <div className='w-[95%] m-auto bg-white'>
            <Navbar />
            <Search />
            <Jobs />
            <Outlet />
            <ToastContainer />
        </div>
    )
}

export default FindJobs;