// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
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
      </div>
    </footer>
  );
};

export default Footer;
