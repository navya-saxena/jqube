import React, { useState } from 'react';
import './Navbar.css'; // Importing the CSS file

const Navbar = () => {
  // Separate states for each dropdown
  const [showJournalsDropdown, setShowJournalsDropdown] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);

  // Function to toggle the Journals dropdown visibility
  const toggleJournalsDropdown = () => {
    setShowJournalsDropdown(!showJournalsDropdown);
  };

  // Function to toggle the Events dropdown visibility
  const toggleEventsDropdown = () => {
    setShowEventsDropdown(!showEventsDropdown);
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
            <li><a href="#services">What We Do</a></li>

            {/* Journals dropdown */}
            <li className="dropdown" 
              onMouseEnter={() => setShowJournalsDropdown(true)} 
              onMouseLeave={() => setShowJournalsDropdown(false)}>
              <a href="#journals">Journals</a>
              {showJournalsDropdown && (
                <ul className="dropdown-menu">
                  <li><a href="#current-journal">Current Journal</a></li>
                  <li><a href="#upcoming-journals">Upcoming Journals</a></li>
                </ul>
              )}
            </li>
            
            {/* Events dropdown */}
            <li className="dropdown" 
              onMouseEnter={() => setShowEventsDropdown(true)} 
              onMouseLeave={() => setShowEventsDropdown(false)}>
              <a href="#events">Events</a>
              {showEventsDropdown && (
                <ul className="dropdown-menu">
                  <li><a href="#workshops">Workshops</a></li>
                  <li><a href="#seminars/webinars">Seminars/Webinars</a></li>
                </ul>
              )}
            </li>

            <li><a href="#conferences">Conferences</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="navbar-button">
            <a href="#donate" >Donate Now</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
