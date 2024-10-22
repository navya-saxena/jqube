import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventsPage from './components/EventsPage';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <EventsPage />
      </div>
      <Footer />
    </>
  );
};

export default App;
