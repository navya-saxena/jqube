import React, { useEffect, useState } from 'react';
import logo from '/src/assets/j qube logo-2.png'; // Assuming you are using a file from your src/assets
import './Header.css'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    const headerOffset = 80;
    const sectionPosition = section.offsetTop - headerOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
    });
  };

  return (
    <header className={`bg-white ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="J-QUBE Logo" className="logo" />
      </div>

      {/* Navigation Section */}
      <nav>
        <ul>
          <li>
            <a href="#home" onClick={() => scrollToSection('#home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" onClick={() => scrollToSection('#about-us')}>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => scrollToSection('#services')}>
              What We Do
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              Journals
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer">
              Conferences
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection('#contact')}>
              Contact
            </a>
          </li>
          <li>
            <button className="button">Donate Now</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
