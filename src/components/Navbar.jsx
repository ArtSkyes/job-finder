import React from 'react';

const Navbar = () => {
    return (
        <div className='navBar flex justify-between items-center p-[3-rem]'>
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-blueColor">
                    <strong>Job</strong>Finder</h1>
            </div>

            <div className="menu flex gap-8">
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">Jobs</li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">Companies</li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">Contact</li>
            </div>
        </div>
    )
}

export default Navbar;