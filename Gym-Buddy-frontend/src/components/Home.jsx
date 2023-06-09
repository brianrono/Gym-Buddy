import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="home-container">
                <h1>Welcome to Your Fitness Buddy</h1>
                <h2>Featured Trainer</h2>
                <p>John Doe</p>
                <p><i>Specializes in strength training and weightlifting</i>.</p>
            </div>
    
            <Link to="/dashboard">
                <button className='home-button'>Proceed to Appointments</button>
            </Link>
    
            <div className='review-container'>
                <h2>Recent Reviews</h2>
                <p>EXCELLENT PERSONAL TRAINER.</p>
                <p>AMAZING GYM, AMAZING WORKOUTS!</p>
                <p>THE BEST ENERGY TO MATCH YOUR DAY</p>
            </div>
        </>
        );
    }

export default Home;
