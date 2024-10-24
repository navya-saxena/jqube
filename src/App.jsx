<<<<<<< HEAD
// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Journals from './components/Journals';
import Footer from './components/Footer';
=======
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

>>>>>>> ce55ceac60d91a275109bc14a7585a4afb98c314
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Navbar />
      <header className="hero-section">
        <h1>Upcoming Journals</h1>
      </header>
      <main className="main-content">
        <Journals />
      </main>
      <Footer />
    </div>
=======
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
    
      </Routes>
      <Footer />
    </Router>
>>>>>>> ce55ceac60d91a275109bc14a7585a4afb98c314
  );
}

export default App;
