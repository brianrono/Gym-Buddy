import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const [appointments, setAppointments] = useState([]);
    const [users, setUsers] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [newAppointment, setNewAppointment] = useState({ exercises: '', duration: '' });
    const [newUser, setNewUser] = useState({ first_name: '', last_name: '' });
    const [newReview, setNewReview] = useState({ user_id: '', trainer_id: '', review: '' });

    useEffect(() => {
        fetchAppointments();
        fetchUsers();
        fetchReviews();
    }, []);

    const fetchAppointments = () => {
        fetch('http://localhost:9292/appointments')
        .then((response) => response.json())
        .then((data) => setAppointments(data));
    };

    const fetchUsers = () => {
        fetch('http://localhost:9292/users')
        .then((response) => response.json())
        .then((data) => setUsers(data));
    };

    const fetchReviews = () => {
        fetch('http://localhost:9292/reviews')
        .then((response) => response.json())
        .then((data) => setReviews(data));
    };

    const addAppointment = () => {
        fetch('http://localhost:9292/appointments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAppointment),
        })
        .then((response) => response.json())
        .then((data) => {
            setAppointments([...appointments, data]);
            setNewAppointment({ exercises: '', duration: '' });
        });
    };

    const addUser = () => {
        fetch('http://localhost:9292/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
        })
        .then((response) => response.json())
        .then((data) => {
            setUsers([...users, data]);
            setNewUser({ first_name: '', last_name: '' });
        });
    };

    const addReview = () => {
        fetch('http://localhost:9292/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
        })
        .then((response) => response.json())
        .then((data) => {
            setReviews([...reviews, data]);
            setNewReview({ user_id: '', trainer_id: '', review: '' });
        });
    };

    const deleteAppointment = (id) => {
        fetch(`http://localhost:9292/appointments/${id}`, {
        method: 'DELETE',
        }).then(() => {
        setAppointments(appointments.filter((appointment) => appointment.id !== id));
        });
    };

    const deleteUser = (id) => {
        fetch(`http://localhost:9292/users/${id}`, {
        method: 'DELETE',
        }).then(() => {
        setUsers(users.filter((user) => user.id !== id));
        });
    };

    const deleteReview = (id) => {
        fetch(`http://localhost:9292/reviews/${id}`, {
        method: 'DELETE',
        }).then(() => {
        setReviews(reviews.filter((review) => review.id !== id));
        });
    };

    const updateAppointment = (id, updatedData) => {
        fetch(`http://localhost:9292/appointments/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
        }).then(() => {
        setAppointments(
            appointments.map((appointment) =>
            appointment.id === id ? { ...appointment, ...updatedData } : appointment
            )
        );
        });
    };

    const updateUser = (id, updatedData) => {
        fetch(`http://localhost:9292/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
        }).then(() => {
        setUsers(users.map((user) => (user.id === id ? { ...user, ...updatedData } : user)));
        });
    };

    const updateReview = (id, updatedData) => {
        fetch(`http://localhost:9292/reviews/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
        }).then(() => {
        setReviews(reviews.map((review) => (review.id === id ? { ...review, ...updatedData } : review)));
        });
    };

    return (
        <div>
        <h1>Dashboard</h1>
        <div className="dashboard-container">
            <div className="dashboard-item">
            <h3>Appointments</h3>
            {appointments.map((appointment) => (
                <div key={appointment.id}>
                <p>Appointment ID: {appointment.id}</p>
                <p>Exercises: {appointment.exercises}</p>
                <p>Duration: {appointment.duration}</p>
                <button onClick={() => deleteAppointment(appointment.id)}>Delete</button>
                <button onClick={() => updateAppointment(appointment.id, { exercises: 'Updated Exercises' })}>
                    Update
                </button>
                </div>
            ))}
            </div>
            <div className="dashboard-item">
            <h3>Users</h3>
            {users.map((user) => (
                <div key={user.id}>
                <p>User ID: {user.id}</p>
                <p>First Name: {user.first_name}</p>
                <p>Last Name: {user.last_name}</p>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => updateUser(user.id, { first_name: 'Updated First Name' })}>Update</button>
                </div>
            ))}
            </div>
            <div className="dashboard-item">
            <h3>Reviews</h3>
            {reviews.map((review) => (
                <div key={review.id}>
                <p>Review ID: {review.id}</p>
                <p>User ID: {review.user_id}</p>
                <p>Trainer ID: {review.trainer_id}</p>
                <p>Review: {review.review}</p>
                <button onClick={() => deleteReview(review.id)}>Delete</button>
                <button onClick={() => updateReview(review.id, { review: 'Updated Review' })}>Update</button>
                </div>
            ))}
            </div>
        </div>
        <div className="dashboard-forms">
            <h3>Add Appointment</h3>
            <input
            type="text"
            value={newAppointment.exercises}
            onChange={(e) => setNewAppointment({ ...newAppointment, exercises: e.target.value })}
            placeholder="Exercises"
            />
            <input
            type="text"
            value={newAppointment.duration}
            onChange={(e) => setNewAppointment({ ...newAppointment, duration: e.target.value })}
            placeholder="Duration"
            />
            <button onClick={addAppointment}>Add Appointment</button>
            <h3>Add User</h3>
            <input
            type="text"
            value={newUser.first_name}
            onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
            placeholder="First Name"
            />
            <input
            type="text"
            value={newUser.last_name}
            onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })}
            placeholder="Last Name"
            />
            <button onClick={addUser}>Add User</button>
            <h3>Add Review</h3>
            <input
            type="text"
            value={newReview.user_id}
            onChange={(e) => setNewReview({ ...newReview, user_id: e.target.value })}
            placeholder="User ID"
            />
            <input
            type="text"
            value={newReview.trainer_id}
            onChange={(e) => setNewReview({ ...newReview, trainer_id: e.target.value })}
            placeholder="Trainer ID"
            />
            <input
            type="text"
            value={newReview.review}
            onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
            placeholder="Review"
            />
            <button onClick={addReview}>Add Review</button>
        </div>
        <Link to="/">Go back to Home</Link>
        </div>
    );
}

export default Dashboard;
