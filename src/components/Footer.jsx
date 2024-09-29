// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>J-QUBE</h2>
        <p>Empowering Future Leaders</p>
      </div>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
      </div>
      <div className="subscribe">
        <input type="email" placeholder="Search for more" />
        <div><p>subscribe for updates</p></div>
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
