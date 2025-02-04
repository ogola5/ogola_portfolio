import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your components
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import Certificates from './components/pages/Certificates';
import Education from './components/pages/Education';
import Experience from './components/pages/Experience';
import Gallery from './components/pages/Gallery';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact'; // Import the Contact page

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} /> {/* Add the route for Contact */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
