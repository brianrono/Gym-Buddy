import React, { useState } from 'react';
import './DarkModeToggle.css';

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
    );
}

export default DarkModeToggle;
