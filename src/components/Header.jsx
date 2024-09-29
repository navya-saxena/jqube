// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">J-QUBE</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to=''>About Us</Link></li>
          <li><Link to="">What We Do</Link></li>
          <li><Link to="">Contact</Link></li>
          <li><button className="donate-btn">Donate Now</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
