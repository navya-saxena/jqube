import React, { useState } from 'react';
import './Navbar.css'; // Importing the CSS file

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-logo">
          <img src="/src/assets/j qube logo-2.png" alt="Qube Logo" />
        </div>

        <div className="navbar-right">
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>

            {/* Journals dropdown */}
            <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <a href="#journals">Journals</a>
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li><a href="#current-journal">Current Journal</a></li>
                  <li><a href="#upcoming-journals">Upcoming Journals</a></li>
                </ul>
              )}
            </li>

            <li><a href="#conferences">Conferences</a></li>
            <li><a href="#services">What We Do</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="navbar-button">
            <a href="#donate" className="donate-button">Donate Now</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
