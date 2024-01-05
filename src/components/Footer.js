import React from 'react';
import '../style/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-one'>
        <h2>Get in touch</h2>
        <p>Chabahil, Ganesthan</p>
        <p>KTM, Nepal</p>
        {/* <p>Email: steponeedunp@gmail.com</p> */}
        <p>Phone: 01-4560004</p>
        <p>Mobile: +977-9863594286</p>
      </div>
      
      <div className='footer-two'>
        <h2>Social Media</h2>
        <ul>
          <li><a href='https://www.facebook.com/steponeconsultancy12'>Facebook</a></li>
          <li><a href='https://www.facebook.com/steponeconsultancy12'>Instagram</a></li>
          <li><a href='https://www.tiktok.com/@steponeconsultants?_t=8fq7yPqiYsh&_r=1'>TikTok</a></li>

        </ul>
      </div>
      <div className='footer-three'>
        <h2>Maps</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0126053595945!2d85.34343867532411!3d27.71689707617713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19600ffe8fc7%3A0xafa19cef9ee8eaa!2sStep%20One%20Education%20Consultant%20Pvt.Ltd!5e0!3m2!1sen!2sus!4v1695805811119!5m2!1sen!2sus" 
        width="600" 
        height="500" 
        style={{border:"0"}}
        loading="lazy" 
      >

        </iframe>
        
      </div>
      
    </footer>
  );
};

export default Footer;
