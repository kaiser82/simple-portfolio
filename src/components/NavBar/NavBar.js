import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../assets/kaiser_ahmed_resume.pdf'
import logo from '../../assets/logo/ka_logo_round.png'

const NavBar = () => {

    const menuItems =
        <>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/about'>About</Link> </li>
            <li> <Link to='/portfolio'>Portfolio</Link> </li>
            <li> <Link to='/contact'>Contact</Link> </li>
            <li> <a href={resume}>Resume</a> </li>

        </>
    return (
        <div className="navbar bg-neutral text-neutral-content lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Kaiser Ahmed</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div><img className='w-14 h-14' src={logo} alt="" /></div>
            </div>
        </div>
    );
};

export default NavBar;