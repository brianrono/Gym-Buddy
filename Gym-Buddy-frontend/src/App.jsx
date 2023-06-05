import { useEffect, useState } from 'react';

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('')
      .then((response) => response.json())
      .then((data) => setExercises(data));
  }, []);

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Duration</th>
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
    </div>
  );
}

export default App;
