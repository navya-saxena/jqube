import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
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
      </div>
    </footer>
  );
};

export default Footer;
