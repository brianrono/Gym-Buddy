import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Appointment = () => {
    const { id } = useParams();
    const [appointment, setAppointment] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:9292/appointments/${id}`)
        .then(response => response.json())
        .then(data => setAppointment(data));
    }, [id]);

    return (
        <div>
        {appointment ? (
            <div>
            <h2>Appointment Details</h2>
            <p>Title: {appointment.title}</p>
            <p>Description: {appointment.description}</p>
            </div>
        ) : (
            <p>Loading appointment...</p>
        )}
        </div>
    );
};

export default Appointment;
