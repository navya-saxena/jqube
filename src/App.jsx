// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Journals from './components/Journals';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
