import React, { useState } from 'react';
import '../styles/contact.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, for example:
    console.log(formData);
    // You can send the form data to your server or perform any other action here

    // Show success message after fading out the form
    setFadeOut(true);
    setTimeout(() => {
      setSubmitted(true);
    }, 500); // Match the transition duration
  };

  return (
    <div>
              {submitted && <p className='success'>Message sent successfully! We'll get back to you soon.</p>}
      <div className={`form-container ${fadeOut ? 'fade-out' : ''}`}>
        <form onSubmit={handleSubmit}>
          <input className='input'
            type="text"
            id="nameInput"
            name="name"
            placeholder="Name"
            pattern="[A-Za-z]+"
            title="Letters only"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            id="emailInput"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            id="subjectInput"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            id="messageInput"
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button className='contact-button' type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
