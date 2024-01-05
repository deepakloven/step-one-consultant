// AboutUs.js
import React from 'react';
import '../style/aboutus.css'; // Import your CSS file
import Countries from './Countries';

function AboutUs() {
  return (
    <>
    <div className="about-us">
      <div className="image-side">
        <img
          src="https://th.bing.com/th/id/R.e13cfdcb0198698fe80ebbdba494e0c5?rik=4ngiRFD7ZCN2Ow&pid=ImgRaw&r=0"
          alt="About Us"
          width="400"
          height="400"
        />
      </div>
      <div className="text-side">
        <div className="text-green">About us</div>
        <div className="book-reading-text">
          <h1>Welcome To Stepone Education Consultancy</h1>
          <br />
          <br />
          Established in 2001, Nepal Education Consultants is one of the pioneers of abroad education counselling in Nepal. We are registered under the Ministry of Education, Science & Technology and fulfill all of the technical and certification requirements along with attaining global certification of training which has possessed us with knowledge to lead the counselling industry. With over 18 years of experience, we specialize in counselling of destinations like Australia, USA, United Kingdom, Canada, Netherlands, and South Korea . Along with a high visa success rate, we are also proud of our students who have been successful in their careers through our counselling and guidance. That makes us possibly the best education consultancy in Nepal.
          <br />
          <br />
          Nepal Education Consultancy is also a proud member of 2 highly esteemed education associations of Nepal; Nepalese Association of Australian Education Representatives (NAAER) and International Education Representative Initiative of Nepal (IERIN).
        </div>
        </div>
    </div>
    <Countries/>

    </>
  );
}

export default AboutUs;
