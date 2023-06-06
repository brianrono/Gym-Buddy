import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/exercises">Exercises</a></li>
                <li><a href="/trainers">Trainers</a></li>
                <li><a href="/contactUs">Contact Us</a></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;
