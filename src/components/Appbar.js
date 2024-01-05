import React from 'react';
import '../style/appbar.css'; // Import your CSS file
import { FaFacebookSquare, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import Instagram and TikTok icons
import { Link } from 'react-router-dom';
import Gogo from '../image/LOGO copy.svg';

function Appbar() {
  return (
    <div className="appbar">
      <div className="logo">
        <img src={Gogo} alt="Logo" />
      </div>
      <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/aboutus">
          About Us
        </Link>
        <Link to="/service">Service</Link>
        {/* Create a hover dropdown menu */}
        <div className="dropdown">
          <Link to="/studyabroad">Study Abroad</Link>
          <div className="dropdown-content">
            <Link to="southkorea"> South Korea</Link><br/>
            <Link to="/studyabroad/canada">studyin Australia</Link><br/>
            <Link to="/studyabroad/canada">study in Canada</Link><br/>
            <Link to="/studyabroad/canada">study in China</Link><br/>
            <Link to="/studyabroad/usa">study in USA</Link>



          </div>
        </div>
        <Link to="/contact">Contact</Link>
      

      </nav>
      <div className="social-icons">
        <a href="https://www.facebook.com/steponeconsultancy12" className="fb-icon">
          <FaFacebookSquare />
        </a>
        <a href="https://www.facebook.com/steponeconsultancy12" className="instagram-icon">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@steponeconsultants?_t=8fq7yPqiYsh&_r=1" className="tiktok-icon">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
}

export default Appbar;
