import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const location = useLocation();

    const linkClass = ({ isActive }) => isActive ? 'text-[#6f6f6f] hover:text-blueColor-400 active' : 'text-[#6f6f6f] hover:text-blueColor-600';

    return (
        <div className='navBar flex justify-between items-center p-5'>
            <div className="logoDiv">
                <div className="logoDiv">
                    <NavLink className="logo text-[25px] text-blueColor flex items-center">
                        <img className="h-10 w-auto mr-2" src={logo} alt="Job Finder" />
                        <strong>Job</strong>Finder
                    </NavLink>
                </div>
            </div>

            <div className="menu flex gap-8 text-[#6f6f6f] hover:text-blueColor" >
                <NavLink to="/" className={`linkClass ${linkClass({ isActive: location.pathname === '/' })}`} >Find Jobs</NavLink>
                <NavLink to="/create-job" className={`linkClass ${linkClass({ isActive: location.pathname === '/create-job' })}`}>Create Job</NavLink>
            </div>
        </div >
    )
}

export default Navbar;