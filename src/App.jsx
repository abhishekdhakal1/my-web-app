import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeSection from "./components/HomeSection";
import AboutMeSection from "./components/AboutMeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-800 text-white">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/aboutme" element={<AboutMeSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
