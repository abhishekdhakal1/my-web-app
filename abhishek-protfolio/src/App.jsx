import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomeSection from './components/HomeSection';
import AboutMeSection from './components/AboutMeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css'; // Tailwind CSS file

function App() {
  return (
    <Router>
      <div className="main">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/aboutme" element={<AboutMeSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
