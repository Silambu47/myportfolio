import React, { useState, useEffect } from "react";
import BK1 from "../images/bk1.png";
import BK2 from "../images/bk2.jpg";
import BK3 from "../images/bk3.jpg";
import "./Project_details.css";

const Projectdetails = ({ selectedProjectIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [BK1, BK2, BK3, BK1, BK2, BK3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [images.length]);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const data = [
        {
            project_name: "BookMyShow Clone",
            description: "This project is a clone of BookMyShow, a popular online ticketing platform.",
            features: [
                "User registration and login",
                "Browse movies and view details",
                "Search movies by title, genre, or language",
                "View movie showtimes and theaters",
                "Select seats and book tickets",
                "View booking history and manage bookings"
            ],
            technologies: [
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "Bootstrap 4"
            ],
            projectlink: 'https://chatgpt.com/c/bb4320cf-901d-469d-9824-3ed1bbc19ec6'
        },
        {
            project_name: "Hospital Management System",
            description: "This project is a comprehensive hospital management system designed to streamline hospital operations and improve patient care.",
            features: [
                "User registration and login",
                "Manage patient records",
                "Appointment scheduling",
                "Doctor and staff management",
                "Inventory management for medical supplies",
                "Billing and invoicing",
                "View patient history and treatment plans"
            ],
            technologies: [
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "React",
                "Node.js",
                "MongoDB"
            ],
            projectlink: 'https://chatgpt.com/c/hospital-management-system'
        },
        {
            project_name: "Another Project",
            description: "This project is a clone of BookMyShow, a popular online ticketing platform.",
            features: [
                "User registration and login",
                "Browse movies and view details",
                "Search movies by title, genre, or language",
                "View movie showtimes and theaters",
                "Select seats and book tickets",
                "View booking history and manage bookings"
            ],
            technologies: [
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "Bootstrap 4"
            ],
            projectlink: 'https://chatgpt.com/c/bb4320cf-901d-469d-9824-3ed1bbc19ec6'
        },
        {
            project_name: "Another Project",
            description: "This project is a clone of BookMyShow, a popular online ticketing platform.",
            features: [
                "User registration and login",
                "Browse movies and view details",
                "Search movies by title, genre, or language",
                "View movie showtimes and theaters",
                "Select seats and book tickets",
                "View booking history and manage bookings"
            ],
            technologies: [
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "Bootstrap 4"
            ],
            projectlink: 'https://chatgpt.com/c/bb4320cf-901d-469d-9824-3ed1bbc19ec6'
        }
    ];

    const renderCarouselImages = () => {
        return images.map((image, index) => (
            <div key={index} className={`carousel-card ${index === currentIndex ? 'active' : ''}`}>
                <img src={image} alt={`Image ${index + 1}`} />
            </div>
        ));
    };

    return (
        <div className="details-abt-proj">
            <div className="content-opener">
                <h1>{data[selectedProjectIndex].project_name}</h1>

                <div className="project-content">
                    <div className="carousel-section">
                        <button className="carousel-control prev" onClick={prevCard}>Prev</button>
                        <div className="carousel-container">
                            <div className="carousel-cards">
                                {renderCarouselImages()}
                            </div>
                        </div>
                        <button className="carousel-control next" onClick={nextCard}>Next</button>
                    </div>
                    <div className="project-details">
                        <p>{data[selectedProjectIndex].description}</p>
                        <h2>Features</h2>
                        <ul>
                            {data[selectedProjectIndex].features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                        <h2>Technologies Used</h2>
                        <div className="tech-buttons">
                            {data[selectedProjectIndex].technologies.map((tech, idx) => (
                                <button key={idx} className="tech-button">
                                    {tech}
                                </button>
                            ))}
                        </div>
                        <a href={data[selectedProjectIndex].projectlink} className="project-link">Project Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projectdetails;
