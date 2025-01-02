import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeSection from "./components/HomeSection";
import AboutMeSection from "./components/AboutMeSection";
import Project from "./components/Project";
import Footer from "./components/Footer";
import "./index.css";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 600);
  }, []);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-800 text-white">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/aboutme" element={<AboutMeSection />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
