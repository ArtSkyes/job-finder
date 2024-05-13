import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const linkClass = ({ isActive }) => isActive ? 'text-[#6f6f6f] hover:text-blueColor-400' : 'text-[#6f6f6f] hover:text-blueColor-600';

    return (
        <div className='navBar flex justify-between items-center p-[3-rem]'>
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-blueColor">
                    <strong>Job</strong>Finder</h1>
            </div>

            <div className="menu flex gap-8 text-[#6f6f6f] hover:text-blueColor" >
                <NavLink to="/" className={linkClass} >Find Jobs</NavLink>
                <NavLink to="/companies" className={linkClass}>Companies</NavLink>
                <NavLink to="/add-job" className={linkClass}>Add Job</NavLink>
            </div>
        </div >
    )
}

export default Navbar;