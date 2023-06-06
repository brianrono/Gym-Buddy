import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('api')
      .then((response) => response.json())
      .then((data) => setExercises(data));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Fitness Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Duration</th>
            <th>Muscle Group</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise.id}>
              <td>{exercise.name}</td>
              <td>{exercise.duration} minutes</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default App;
