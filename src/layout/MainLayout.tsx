import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const MainLayout = () => {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Container maxWidth="lg">
                <Outlet />
                <ToastContainer />
            </Container>
        </>
    )
}

export default MainLayout;