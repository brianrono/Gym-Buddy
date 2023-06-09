import { useState } from 'react';
import './ContactUs.scss'

const ContactUs = () => {
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();


        console.log('Submitted message:', message);
        alert('Message submitted successfully!');
        setIsSubmitted(true);
    };

    return (
        <div>
        <h2>Contact Us</h2>
        {isSubmitted ? (
            <p>Thank you for your message!</p>
        ) : (
            <form onSubmit={handleSubmit}>
            <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Enter your message..."
            />
            <button type="submit">Submit</button>
            </form>
        )}
        </div>
    );
};

export default ContactUs;
