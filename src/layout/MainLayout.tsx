import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className='w-[95%] m-auto bg-white'>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </div>
    )
}

export default MainLayout;