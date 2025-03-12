import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Contact/Contact";
import ProjectTable from "./Tablecomponents/ProjectTable";
import Resume from "./Resume/Resume";
import Footer from "./Footer/Footer";
import Project from "./ProjectCompo/Project";
import Experience from "./Components/Experience";
import SkillsComponent from "./Aboutme/SkillsComponent";
import Home from "./Components/Home";
import WhatIDo from "./Components/WhatIDo"; // Import the new component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main-container">
        {/* Left Side */}
        <div className="left-side">
          <img src="/images/jordan.png" alt="Profile" className="profile-image" />
          <h1 className="profile-name">Silambarasan</h1>
          <Navbar />
          <button className="learn-more-btn">Learn More</button>
        </div>

        {/* Right Side */}
        <div className="right-side">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<SkillsComponent />} />
            <Route path="/project" element={<Project />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/view-table" element={<ProjectTable />} />
            <Route path="/what-i-do" element={<WhatIDo />} /> {/* Add new route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;