import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div id="home" className="home">
      <section className="hero">
        <h1>Empowering Future Leaders, Support Education for Underprivileged Children.</h1>
        <p>270 children under our care, 50+ donations collected</p>
      </section>

      <section id="about-us" className="mission">
        <h2>Help Us Build Brighter Tomorrows</h2>
        <p>
          "At our core, we believe that every child, regardless of their background, deserves the
          opportunity to receive quality education and the chance to shape their own future. By
          supporting the education of underprivileged children, you are not only helping them break
          the cycle of poverty but also empowering them to become the leaders of tomorrow. Your
          donations directly contribute to building a brighter future—where every child has the
          tools and resources to thrive, dream big, and make a positive impact on their community
          and beyond."
        </p>
        <button>Learn more</button>
      </section>

      <section id="services" className="services">
        <div className="services-content">
          <div className="services-text">
            <h2>What Services We Provide?</h2>
            <ul>
              <li>
                <b>AI-Driven Personalized Learning:</b>
                <br />
                customized learning plans for each student powered by artificial intelligence
              </li>
              <li>
                <b>Community-Integrated Learning Spaces:</b>
                <br />
                local spaces transformed into community-driven, interactive learning hubs
              </li>
              <li>
                <b>Global Knowledge Exchange:</b>
                <br />
                International collaboration and virtual exchanges for global learning exposure.
              </li>
              <li>
                <b>Future Skills and Innovation Labs:</b>
                <br />
                Hands-on labs teaching coding, robotics, and creative problem-solving.
              </li>
            </ul>
          </div>
          <div className="services-image">
            <img src="/src/assets/govt.jpg" alt="Children Learning" />
          </div>
        </div>
      </section>

      <section id="project" className="projects">
        <h2>Projects We Have Done</h2>
        <p1>
          <b>We are creating a place where children with special needs can thrive</b>
        </p1>
        <div className="project-grid">
          <div className="project-item">
            <div className="project-image" style={{ backgroundImage: 'url(/src/assets/p1.webp)' }}>
              <div className="overlay">
                <h3>Mission Smile 1k</h3>
                <p>Outdoor charity event for children</p>
                <button className="learn-more">Learn more</button>
              </div>
              <div className="project-back">
                <h3>More Details</h3>
                <p>This project aims to spread joy to underprivileged children.</p>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image" style={{ backgroundImage: 'url(/src/assets/p2.webp)' }}>
              <div className="overlay">
                <h3>Weekly Excursions</h3>
                <p>Fun and educational trips for children</p>
                <button className="learn-more">Learn more</button>
              </div>
              <div className="project-back">
                <h3>More Details</h3>
                <p>Weekly educational excursions for enhancing learning experiences.</p>
              </div>
            </div>
          </div>

          <div className="project-item">
            <div className="project-image" style={{ backgroundImage: 'url(/src/assets/p3.webp)' }}>
              <div className="overlay">
                <h3>Monthly Public Awareness</h3>
                <p>Workshops to create awareness in the community</p>
                <button className="learn-more">Learn more</button>
              </div>
              <div className="project-back">
                <h3>More Details</h3>
                <p>Public awareness programs focused on social impact and community building.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="donations-breakdown" className="donation-breakdown">
        <div className="donation-breakdown-content">
          <div className="donation-breakdown-text">
            <h2>How we spend your donations and where it goes</h2>
            <p>
              We understand that when you make a donation, you want to know exactly where your money
              is going, and we pledge to be transparent.
            </p>
            <ul>
              <li>
                <span className="color-box" style={{ backgroundColor: '#6CE5E8' }}></span> 40%
                childcare home
              </li>
              <li>
                <span className="color-box" style={{ backgroundColor: '#41B8D5' }}></span> 35%
                cleanliness program
              </li>
              <li>
                <span className="color-box" style={{ backgroundColor: '#2D8BBA' }}></span> 10%
                excursions
              </li>
              <li>
                <span className="color-box" style={{ backgroundColor: '#2F5F98' }}></span> 10%
                helping people
              </li>
              <li>
                <span className="color-box" style={{ backgroundColor: '#31356E' }}></span> 5%
                feeding the poor
              </li>
            </ul>
          </div>
          <div className="donation-breakdown-chart">
            <img src="/src/assets/piechart.png" alt="Donation Pie Chart" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
