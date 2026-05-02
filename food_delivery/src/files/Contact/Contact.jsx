import '../Contact/Contact.css';
import { useState } from 'react';
const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
    }
    return (
        <div className="contact-container">
            <div className="contact-box">
                <h1>Contact Us</h1>
                <p>We would love to hear from you!</p>

                <div className="contact-info">
                    <p><strong>📍 Address:</strong> Bhubaneswar, Odisha, India</p>
                    <p><strong>📞 Phone:</strong> +91 98765 43210</p>
                    <p><strong>📧 Email:</strong> support@foodapp.com</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea placeholder="Write Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;