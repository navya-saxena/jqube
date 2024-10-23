import React from "react";
import "./EventsPage.css"; // Assuming the CSS file includes the styles for the cards

const EventsPage = () => {
  return (
    <div className="events-page">
      <h2 className="events-title">Events & Workshops</h2>
      <div className="event-cards-container">
        {/* Event 1 */}
        <div className="event-card">
          <img src="https://via.placeholder.com/150" alt="STEM Workshop for Kids" />
          <h3>STEM Workshop for Kids</h3>
          <p><strong>Date:</strong> 15th October 2024</p>
          <p>A hands-on workshop introducing kids to science, technology, engineering, and mathematics.</p>
          <button>Register Now</button>
        </div>

        {/* Event 2 */}
        <div className="event-card">
          <img src="https://via.placeholder.com/150" alt="AI in Education Seminar" />
          <h3>AI in Education Seminar</h3>
          <p><strong>Date:</strong> 22nd October 2024</p>
          <p>Exploring the role of Artificial Intelligence in transforming education systems.</p>
          <button>Register Now</button>
        </div>

        {/* Event 3 */}
        <div className="event-card">
          <img src="https://via.placeholder.com/150" alt="Teachers' Training Workshop" />
          <h3>Teachers' Training Workshop</h3>
          <p><strong>Date:</strong> 5th November 2024</p>
          <p>A workshop dedicated to empowering teachers with the latest tools and techniques for classroom innovation.</p>
          <button>Register Now</button>
        </div>

        {/* Event 4 */}
        <div className="event-card">
          <img src="https://via.placeholder.com/150" alt="EdTech Conference 2024" />
          <h3>EdTech Conference 2024</h3>
          <p><strong>Date:</strong> 12th November 2024</p>
          <p>Join education and technology experts for a one-day conference on the future of EdTech.</p>
          <button>Register Now</button>
        </div>

        {/* New Event 5 */}
        <div className="event-card">
          <img src="https://via.placeholder.com/150" alt="Coding Bootcamp for Beginners" />
          <h3>Coding Bootcamp for Beginners</h3>
          <p><strong>Date:</strong> 20th November 2024</p>
          <p>An intensive bootcamp designed to introduce beginners to the world of coding.</p>
          <button>Register Now</button>
        </div>

        {/* New Event 6 */}
        <div className="event-card">
          <img src="https://via.placeholder.com/150" alt="Cybersecurity Workshop" />
          <h3>Cybersecurity Workshop</h3>
          <p><strong>Date:</strong> 25th November 2024</p>
          <p>Learn the basics of cybersecurity and how to protect yourself in the digital world.</p>
          <button>Register Now</button>
        </div>

        {/* New Event 7 */}
        <div className="event-card">
          <img src="https://via.placeholder.com/150" alt="Robotics Camp" />
          <h3>Robotics Camp</h3>
          <p><strong>Date:</strong> 30th November 2024</p>
          <p>A camp for students interested in learning how to build and program robots.</p>
          <button>Register Now</button>
        </div>

        {/* New Event 8 */}
        <div className="event-card">
          <img src="https://via.placeholder.com/150" alt="Future of AI in Education Conference" />
          <h3>Future of AI in Education Conference</h3>
          <p><strong>Date:</strong> 10th December 2024</p>
          <p>A conference focused on the future of Artificial Intelligence and its role in education.</p>
          <button>Register Now</button>
        </div>
      </div>

      <section id="seminars" className="seminar-webinar-section">
        <h2 className="section-title">Upcoming Seminars & Webinars</h2>
        <div className="seminar-cards-container">
          {/* Seminar Card 1 */}
          <div className="seminar-card">
            <img src="https://via.placeholder.com/150" alt="AI in Education Seminar" />
            <h3>AI in Education Seminar</h3>
            <p><strong>Date:</strong> 22nd October 2024</p>
            <p>Explore the role of Artificial Intelligence in transforming education systems.</p>
            <button>Register Now</button>
          </div>

          {/* Webinar Card 1 */}
          <div className="seminar-card">
            <img src="https://via.placeholder.com/150" alt="EdTech Webinar" />
            <h3>EdTech Webinar 2024</h3>
            <p><strong>Date:</strong> 10th November 2024</p>
            <p>Join us to discuss the latest advancements in educational technology.</p>
            <button>Register Now</button>
          </div>

          {/* Seminar Card 2 */}
          <div className="seminar-card">
            <img src="https://via.placeholder.com/150" alt="Teacher Training Webinar" />
            <h3>Teachers' Training Webinar</h3>
            <p><strong>Date:</strong> 15th November 2024</p>
            <p>Empowering teachers with new skills and techniques for classroom innovation.</p>
            <button>Register Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
