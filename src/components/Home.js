// Container.js
import React, { useEffect, useRef } from 'react';
import '../style/home.css'; // Import your CSS file
import Newyork from '../video/SouthKorea.mp4';
import Service from './Service';
import Countries from './Countries';

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Log video element and its attributes for debugging
    console.log(videoRef.current);
    console.log(videoRef.current.src);
  }, []);

  return (
    <>
      <div className='newyork'>
        <h1 className='head'>WELCOME TO STEP ONE EDUCATION CONSULTANTS</h1>
        <video ref={videoRef} autoPlay loop muted playsInline className='newyork-video'>
          <source src={Newyork} type='video/mp4' />
        </video>
      </div>
      <div className="container">
        <div className="left-content">
          <h2>Best Educational<br/>Consultancy in Nepal</h2>
          <p>
            Welcome to Step One Education Consultancy, your trusted partner in the pursuit of educational excellence. At Step One, we take pride in our commitment to providing unparalleled guidance and support to students and professionals as they embark on their educational journeys.
          </p>
          <h2>Our Vision</h2>
          <p>
            Our vision is simple yet profound: to empower individuals with the knowledge and resources they need to unlock their full potential through education. We believe that education is the foundation upon which dreams are built, and we are dedicated to helping you lay that foundation.
          </p>
        </div>
        <div className="right-content">
          <div className="big-image">
            <img
              src="https://www.nepalec.edu.np/storage/upload/23/01/1673245159photo1673244325.jpeg"
              alt="Big Image"
              width="400"
              height="400"
            />
          </div>
          <div className="sub-div">
            <div className="sub-div-content">
              <img
                src="https://th.bing.com/th/id/OIP.jjLyqXfquTxCTFVxrSlVbQHaE8?pid=ImgDet&rs=1"
                alt="Small Image"
                width="100"
                height="100"
              />
              <div className="one_div">Get Scholarship</div>
              <h3>Gain Admission to Your Dream College Abroad</h3>
              <p>
                With years of experience, Stepone Education Consultancy is one of the pioneers of education counseling in Nepal. Contact us!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Service/>
      <Countries/>

    </>
  );
}

export default Home;
