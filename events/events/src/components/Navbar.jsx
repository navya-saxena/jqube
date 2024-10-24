import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showJournalsDropdown, setShowJournalsDropdown] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);
  
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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

            <li className="dropdown" 
              onMouseEnter={() => setShowEventsDropdown(true)} 
              onMouseLeave={() => setShowEventsDropdown(false)}>
              <a href="#events">Events</a>
              {showEventsDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <a 
                      href="#workshops" 
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default link behavior
                        handleScrollToSection('workshops');
                      }}
                    >
                      Workshops
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#seminars" 
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default link behavior
                        handleScrollToSection('seminars');
                      }}
                    >
                      Seminars/Webinars
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li><a href="#conferences">Conferences</a></li>
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
