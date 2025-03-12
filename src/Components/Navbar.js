import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  const navItems = [
    { path: "/", label: "Home", icon: <HomeIcon /> },
    { path: "/about-me", label: "About Me", icon: <PersonIcon /> },
    { path: "/project", label: "Projects", icon: <WorkIcon /> },
    { path: "/experience", label: "Experience", icon: <WorkIcon /> },
    { path: "/resume", label: "Resume", icon: <DescriptionIcon /> },
    { path: "/contact", label: "Contact", icon: <EmailIcon /> },
    { path: "/what-i-do", label: "What I Do", icon: <WorkIcon /> }, // Add new route
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <div className="nav-icon">{item.icon}</div>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;