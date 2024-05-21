import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, useTheme, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);

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

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: `1px solid ${theme.palette.divider}`, bgcolor: 'white', padding: '10px' }}>
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <Typography variant="h6" color="primary" noWrap sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="Job Finder" style={{ height: '40px', marginRight: '10px' }} />
                        JobFinder
                    </Typography>
                </NavLink>
                <Box sx={{ marginLeft: 'auto', display: { xs: 'none', md: 'flex' } }}>
                    <Button component={NavLink} to="/" sx={linkStyle}>
                        Find Jobs
                    </Button>
                    <Button component={NavLink} to="/create-job" sx={linkStyle}>
                        Create Job
                    </Button>
                </Box>
                {isMobile && (
                    <>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 'auto' }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={handleDrawerToggle}
                        >
                            <Box sx={{ width: 150, p: 3 }}>
                                <Button component={NavLink} to="/" sx={linkStyle}>
                                    Find Jobs
                                </Button><br />
                                <Button component={NavLink} to="/create-job" sx={linkStyle}>
                                    Create Job
                                </Button>
                            </Box>
                        </Drawer>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;