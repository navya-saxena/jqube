<<<<<<< HEAD
import React from 'react';
=======
// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
>>>>>>> ce55ceac60d91a275109bc14a7585a4afb98c314
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>J-Qube.Com</h3>
          <p>
            J-Qube: A platform to promote educational research and development, fostering innovation in learning and mentorship.
          </p>
        </div>
        <div className="footer-section">
          <h4>Additional Links</h4>
          <ul>
            <li><a href="#">Management Team</a></li>
            <li><a href="#">Current Journal</a></li>
            <li><a href="#">Upcoming Journals</a></li>
            <li><a href="#">National Awards</a></li>
            <li><a href="#">Global Awards</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Membership Benefits</a></li>
            <li><a href="#">Membership Details</a></li>
            <li><a href="#">Online Application</a></li>
            <li><a href="#">List of Life Members</a></li>
            <li><a href="#">Application</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Enquiry Us</h4>
          <p>Prof. (Dr.) Jayant Jagtap</p>
          <p>Executive Editor, Member Planning J-Qube International</p>
          <p>Email: contact@jqube.org</p>
          <p>Phone: +91-1234567890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright J-Qube Edutech Foundation, 2024 | Developed by <a href="#">Blue Digital Technologies</a></p>
=======
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h2>J-QUBE EDUTECH FOUNDATION</h2>
          <p>Empowering Future Leaders</p>
        </div>
        <div className="footer-links">
          <div>
            <h3>More</h3>
            <a href="#projects">Projects</a>
            <a href="#events">Events</a>
            <a href="#donate">Donate</a>
            <a href="#blog">Blog</a>
          </div>
          <div>
            <h3>Connect</h3>
            <div className="flex items-center mb-2">
              <FaFacebook className="mr-2" />
              <a href="#facebook">Facebook</a>
            </div>
            <div className="flex items-center mb-2">
              <FaInstagram className="mr-2" />
              <a href="#instagram">Instagram</a>
            </div>
            <div className="flex items-center mb-2">
              <FaTwitter className="mr-2" />
              <a href="#twitter">Twitter</a>
            </div>
            <div className="flex items-center mb-2">
              <FaLinkedin className="mr-2" />
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="subscribe-section">
          <p>Subscribe to get latest updates</p>
          <div className="flex items-center">
            <input 
              type="email" 
              placeholder="Your email" 
              className="subscribe-input"
            />
            <button className="subscribe-button">
              Subscribe
            </button>
          </div>
        </div>
>>>>>>> ce55ceac60d91a275109bc14a7585a4afb98c314
      </div>
    </footer>
  );
};

export default Footer;
