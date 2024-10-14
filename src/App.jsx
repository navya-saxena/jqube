// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Journals from './components/Journals'; // Import your Journals component
import Conferences from './components/Conferences';


import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/journals" component={Journals} />
        <Route path="/conferences" component={Conferences} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
