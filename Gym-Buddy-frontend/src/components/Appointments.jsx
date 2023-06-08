import { useEffect, useState } from 'react';

function Appointments() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
        const response = await fetch('http://localhost:9292/appointments');
        const data = await response.json();
        setAppointments(data);
        } catch (error) {
        console.error('Error fetching appointments:', error);
        }
    };

    return (
        <div>
        <h1>Appointments</h1>
        <ul>
            {appointments.map(appointment => (
            <li key={appointment.id}>
                <p>Exercises: {appointment.exercises}</p>
                <p>Duration: {appointment.duration}</p>
                <p>User: {appointment.user.name}</p>
                <p>Trainer: {appointment.trainer.name}</p>
                {/* Include additional appointment details here */}
            </li>
            ))}
        </ul>
        </div>
    );
}

export default Appointments;
