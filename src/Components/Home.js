import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import profileImage from "../images/jordan.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-content">
          <h1>Hey, I'm Silambarasan.</h1>
          <p>
            As a biomedical engineer turned software developer, I bring a
            meticulous eye for detail and a passion for crafting both elegant
            code and captivating designs, creating seamless and intuitive
            digital experiences.
          </p>
          <NavLink to="/about-me">
            <button className="neon-button neon-blue">Learn More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
