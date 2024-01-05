import React, { useEffect, useRef } from 'react';
import '../style/contact.css';
import Video from '../video/Video.mp4';
import emailjs from '@emailjs/browser';

const Contact = () => {
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rkgv4vo', 'template_psbeqv8',e.target, 'mx3Cd0KpIqN0GoSYh')
      .then((result) => {
          console.log(result.text);
          console.log("success ")
      }, (error) => {
          console.log(error.text);
          console.log("failed")
      });
  };
  const videoRef = useRef(null);

  useEffect(() => {
    // Log video element and its attributes for debugging
    console.log(videoRef.current);
    console.log(videoRef.current.src);
  }, []);

  return (
    <div className="background-video">
      <video ref={videoRef} autoPlay loop muted playsInline className="video">
        <source src={Video} type="video/mp4" />
      </video>
        
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={sendEmail}>
          <div className="input-container">
          <label>FullName</label>

            <input type="text" name= 'user_name'placeholder="Full Name" className="input-field" />
          </div>
          <div className="input-container">
          <label>Address</label>

            <input type="text" name= 'user_address'placeholder="Address" className="input-field" />
          </div>
          <div className="input-container">
          <label>Phone number</label>

            <input type="tel" name= 'user_number'placeholder="Phone Number" className="input-field" />
          </div>
          <div className="input-container">
          <label>Email</label>

            <input type="email" name= 'user_email' placeholder="Email" className="input-field" />
          </div>
          <div className="input-container">
            <label>Message</label>
            <textarea placeholder="Message" name= 'user_message'className="input-field"></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
