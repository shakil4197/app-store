import React from 'react';
import { FaGithub } from 'react-icons/fa';
import logoIcon from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import '../../App.css'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/apps'>Apps</NavLink></li>
                        <li><NavLink to='/installation'>Installation</NavLink></li>
                    </ul>
                </div>
                <Link to='/'>
                    <div className='flex items-center btn btn-ghost'>
                        <img src={logoIcon} alt="" className='w-8 h-8' />
                        <span className="text-xl text-purple-600 font-bold">HERO.IO</span>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/apps'>Apps</NavLink></li>
                    <li><NavLink to='/installation'>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-linear-to-r from-purple-700 to-purple-500 text-white hover:bg-linear-to-l transition-all ease-in-out duration-700"><FaGithub /> Contribute</a>
            </div>
        </div>
    );
};

export default NavBar;