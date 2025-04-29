import React from 'react';
import { Form } from 'react-router-dom';
// import './Contact.css';

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res)
    console.log(data);
    return null;
  } catch (error) {
    console.log(error.message);

  }
}


export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="form-container">
        <h2>Contact Us</h2>
        <Form method='POST' action='/contact' className="contact-form">
          <label htmlFor="username">Name</label>
          <input type="text" autoComplete='off' name='username' id="username" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" autoComplete='off' name='email' id="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" autoComplete='off' name='message' placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </Form>
      </div>

      <div className="map-container">
        <div className="map-box">
       
          <iframe  title="Google Map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d803.2814066333065!2d67.0048188549697!3d24.874063258397666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1745923092048!5m2!1sen!2s" width="100%"
            height="300"
            style={{ border: "0", borderRadius: "16px" }}
            allowFullScreen=""
            loading="lazy"></iframe>

        </div>
      </div>
    </section>
  );
};
