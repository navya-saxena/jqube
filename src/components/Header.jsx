import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {  // Adjust the value based on when you want it to trigger
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    const headerOffset = 80;  // Adjust this value depending on your header height
    const sectionPosition = section.offsetTop - headerOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
    });
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/src/assets/j qube logo-2.png" alt="J-QUBE Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home" onClick={() => scrollToSection('#home')}>Home</a>
          </li>
          <li>
            <a href="#about-us" onClick={() => scrollToSection('#about-us')}>About Us</a>
          </li>
          <li>
            <a href="#services" onClick={() => scrollToSection('#services')}>What We Do</a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection('#contact')}>Contact</a>
          </li>
          <li>
            <button className="donate-btn">Donate Now</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
