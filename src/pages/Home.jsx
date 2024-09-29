// src/pages/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Empowering Future Leaders, Support Education for Underprivileged Children.</h1>
        <p>270 children under our care, 50+ donations collected</p>
      </section>
      <section className="mission">
        <h2>Help Us Build Brighter Tomorrows</h2>
        <p>"At our core, we believe that every child, regardless of their background, deserves the opportunity to receive quality education and the chance to shape their own future. By supporting the education of underprivileged children, you are not only helping them break the cycle of poverty but also empowering them to become the leaders of tomorrow. Your donations directly contribute to building a brighter future—where every child has the tools and resources to thrive, dream big, and make a positive impact on their community and beyond."</p>
        <button>Learn more</button>
      </section>
      <section className="services">
      <div className="services-content">
      <div className="services-text">
        <h2>What Services We Provide?</h2>
        <ul>
          <li><b>AI-Driven Personalized Learning:</b><br></br>
          customized learning plans for each student powered by artificial intelligence</li>
          <li><b>Community-Integrated Learning Spaces:</b><br></br>
          local spaces transformed into community-driven ,interactive learning hub</li>
          <li><b>Global Knowledge Exchange:</b><br>
          </br>International collaboration and virtual exchanges for global learning exposure.</li>
          <li><b>Future Skills and Innovation Labs:</b><br></br>Hands-on labs teaching coding ,robotics and creative problem-solving.</li>
        </ul>
        </div>
        <div className="services-image">
            <img src="/src/assets/govt.jpg" alt="Children Learning" />
          </div>
        </div>
      </section>
      <section className="projects">
  <h2>Projects We Have Done</h2>
  <p1><b>We are creating a place where children with special needs can thrive</b></p1>
  <div className="project-grid">
    <div className="project-item">
      <div className="project-image" style={{ backgroundImage: `url('/src/assets/p1.webp')` }}>
        <div className="overlay">
          <h3>Mission Smile 1k</h3>
          <p>Outdoor charity event for children</p>
          <button className="learn-more">Learn more</button>
        </div>
      </div>
    </div>

    <div className="project-item">
      <div className="project-image" style={{ backgroundImage: `url('/src/assets/p2.webp')` }}>
        <div className="overlay">
          <h3>Weekly Excursions</h3>
          <p>Fun and educational trips for children</p>
          <button className="learn-more">Learn more</button>
        </div>
      </div>
    </div>

    <div className="project-item">
      <div className="project-image" style={{ backgroundImage: `url('/src/assets/p3.webp')` }}>
        <div className="overlay">
          <h3>Monthly Public Awareness</h3>
          <p>Workshops to create awareness in the community</p>
          <button className="learn-more">Learn more</button>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="donation">
        <h2>How We Spend Your Donations</h2>
        <p>Your donations help provide education, healthcare, and meals for children in need.</p>
      </section>
    </div>
  );
};

export default Home;
