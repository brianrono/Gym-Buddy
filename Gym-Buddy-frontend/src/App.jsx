import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    useEffect(() => {
      // Apply dark mode styles
      if (darkMode) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
    }, [darkMode]);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Navbar />
      <img src='../public/darkmode.svg' alt='Dark mode icon' className={`dark-mode-icon ${darkMode ? 'dark' : 'light'}`}
        onClick={toggleDarkMode} />
      <h1 className='header'>Gym Buddy</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Duration</th>
            <th>Muscle Group</th>
          </tr>
        </thead>
      </table>
      <Footer />
    </div>
  );
}

export default App;
