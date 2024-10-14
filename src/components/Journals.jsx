// src/components/Journals.js
import React from 'react';
import './Journals.css';

const journals = [
  "JANOLI International Journal of Mathematical Sciences (IIJMS)",
  "JANOLI International Journal of Sustainable Management and Development (IIJSMD)",
  "JANOLI International Journal of Data Science (IIJDS)",
  "JANOLI International Journal of Big Data (IIJBD)",
  "JANOLI International Journal of Electronics, Computer Sciences and Engineering (IIJECSE)",
  "JANOLI International Journal of Sciences and Technology (IIJST)",
  "JANOLI International Journal of Artificial Intelligence and Applications (IIJAIA)",
  "JANOLI International Journal of Physics (IIJP)",
  "JANOLI International Journal of Pharmaceuticals (IIJP)",
"JANOLI International Journal of Humanities and Languages (IIJHL)",
"JANOLI International Journal of Design and Engineering (IIJDE)",
"JANOLI International Journal of Human Resource and Management (IIJHRM)",
"JANOLI International Journal of Marketing and Finance (IIJMF)",
"JANOLI International Journal of Futuristic management (IIJFM)",
"JANOLI International Journal of Machine Learning and Applications (IIJMLA)",
"JANOLI International Journal of Pure and Applied Mathematics (IIJPAM)",
"JANOLI International Journal of cyber security(IIJCS)"
];

const Journals = () => {
  return (
    <div className="journals-section">
      <h2>Upcoming Journals</h2>
      <ul className="journals-list">
        {journals.map((journal, index) => (
          <li key={index}>
            <span className="journal-title">{journal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Journals;
