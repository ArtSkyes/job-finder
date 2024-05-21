import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const linkStyle = {
        fontFamily: 'Poppins, sans-serif',
        color: '#6f6f6f',
        '&:hover': {
            color: '#2a68ff',
        },
        '&.active': {
            color: '#2a68ff',
        }
    };

    return (
        <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: (theme) => `5px rounded ${theme.palette.divider}`, bgcolor: 'white', padding: '10px' }}>
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <Typography variant="h5" color="primary" noWrap sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="Job Finder" style={{ height: '40px', marginRight: '10px' }} />
                        <strong>Job</strong>Finder
                    </Typography>
                </NavLink>
                <div style={{ marginLeft: 'auto' }}>
                    <nav>
                        <Button variant="navbar" component={NavLink} to="/" sx={linkStyle} style={{ textDecoration: 'none' }}>
                            Find Jobs
                        </Button>
                        <Button variant="navbar" component={NavLink} to="/create-job" sx={linkStyle} style={{ textDecoration: 'none' }}>
                            Create Job
                        </Button>
                    </nav>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
