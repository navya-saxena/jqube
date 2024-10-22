import React, { useEffect, useState } from 'react';
import logo from '/src/assets/j qube logo-2.png'; // Assuming you are using a file from your src/assets

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
    <header
      className={`fixed w-full top-0 left-0 z-50 flex justify-between items-center px-8 py-4 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="J-QUBE Logo" className="w-24 h-auto" />
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              onClick={() => scrollToSection('#home')}
              className="text-navy-900 text-lg px-4 py-2 hover:text-yellow-500 transition-all"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              onClick={() => scrollToSection('#about-us')}
              className="text-navy-900 text-lg px-4 py-2 hover:text-yellow-500 transition-all"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={() => scrollToSection('#services')}
              className="text-navy-900 text-lg px-4 py-2 hover:text-yellow-500 transition-all"
            >
              What We Do
            </a>
          </li>

          {/* Updated Journal Link */}
          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-900 text-lg px-4 py-2 hover:text-yellow-500 transition-all"
            >
              Journals
            </a>
          </li>

          {/* Updated Conference Link */}
          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-900 text-lg px-4 py-2 hover:text-yellow-500 transition-all"
            >
              Conferences
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => scrollToSection('#contact')}
              className="text-navy-900 text-lg px-4 py-2 hover:text-yellow-500 transition-all"
            >
              Contact
            </a>
          </li>
          <li>
            <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors">
              Donate Now
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
