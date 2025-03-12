import React from 'react';
import './Resume.css';
import File from "../images/document.pdf";
const Resume = () => {
  return (
    <div className="resume-container" id='resumepage' >
      <a href={File} download="document.pdf" >
        <button className='download_button'>View My full Resume<a href="#">↗</a></button>
      </a>
      <header className="resume-header">
        <h1 className="resume-name">SILAMBARASAN T</h1>
        <p className="resume-contact">
          10A East Street, East Srinivasapuram (P.O), Ariyalur-621705<br />
          <a href="mailto:silambukural13@gmail.com">silambukural13@gmail.com</a> |
          <a href="https://www.linkedin.com/in/silambutamizhl/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="https://github.com/Silambutamizhl" target="_blank" rel="noopener noreferrer">GitHub</a> |
          +91-6382269783
        </p>
      </header>

      <div className="resume-columns">
        <div className="resume-left-column">
          <section>
            <h2 className="resume-section-title">EDUCATION</h2>
            <div className="resume-item">
              <strong>Bachelor of Engineering (Biomedical Engineering)</strong><br />
              PSG College of Technology, Coimbatore<br />
              <span className="resume-date">August 2017 – April 2021</span><br />
              CGPA: 7.11/10.0
            </div>
            <div className="resume-item">
              <strong>Higher Secondary Education (2016 - 2017)</strong><br />
              Raja Vignesh HS School, Melamathur<br />
              Percentage: 94.08%
            </div>
            <div className="resume-item">
              <strong>Secondary Education (2014-2015)</strong><br />
              Govt. HS School, Kamarasavalli, Ariyalur<br />
              Percentage: 95.20%
            </div>
          </section>

          <section>
            <h2 className="resume-section-title">WORK EXPERIENCE</h2>
            <div className="resume-item">
              <strong>Associate Trainee | Poweschool Neverskip | Chennai</strong><br />
              <span className="resume-date">Dec 2022 – Present</span><br />
              - Developed and maintained web applications using PHP and React.<br />
              - Collaborated with cross-functional teams to design and implement web solutions.<br />
              - Managed databases using MySQL.<br />
              - Designed user interfaces using HTML, CSS, JavaScript, and React.<br />
              - Provided technical support and training to end-users.
            </div>
            <div className="resume-item">
              <strong>Application & Service Engineer | Golechha Healthcare | Chennai</strong><br />
              <span className="resume-date">Mar 2022 – Aug 2022</span><br />
              - Installed, tested, calibrated, and repaired biomedical equipment.<br />
              - Provided equipment operation demonstrations and training to healthcare staff.
            </div>
          </section>

          <section>
            <h2 className="resume-section-title">ACADEMIC PROJECTS</h2>
            <div className="resume-item">
              <strong>Angle Measurement Feedback System For Powered Exoskeleton | Arduino | MPU6050</strong><br />
              <span className="resume-date">Mar 2021</span><br />
              - Developed a real-time feedback system for a powered exoskeleton controller.<br />
              - Implemented angle measurement using the MPU6050 gyro sensor to capture angles during movements.<br />
              - Enabled precise control and optimization of exoskeleton functionality.
            </div>
            <div className="resume-item">
              <strong>Dynamic Orthosis for Upper Limb Extremities | MS | CAD | Linear Actuator</strong><br />
              <span className="resume-date">Nov 2020</span><br />
              - Developed an affordable wrist-activated hand orthosis for individuals with reduced grip strength.<br />
              - Designed a cost-effective orthotic device to enhance physiotherapy for patients with stroke, osteoarthritis, and rheumatoid arthritis.
            </div>
          </section>
        </div>

        <div className="resume-right-column">
          <section>
            <h2 className="resume-section-title">SKILLS</h2>
            <ul className="resume-list">
              <li>Programming Languages: C, C++, Java, JavaScript</li>
              <li>Web Development: HTML, CSS, React, PHP</li>
              <li>Tools & Technologies: React, Redux, Git, MySQL, MATLAB</li>
              <li>Areas of Interest: Problem Solving, Web Development</li>
              <li>Other Skills: OOP, DBMS, Microsoft Office (Excel, Word)</li>
            </ul>
          </section>

          <section>
            <h2 className="resume-section-title">WORKSHOPS</h2>
            <div className="resume-item">
              <strong>Hospital Website Model | HTML, CSS, JavaScript</strong><br />
              <span className="resume-date">2022</span><br />
              - Designed a responsive hospital website model for patients to search departments, doctors, and learn about the hospital.
            </div>
            <div className="resume-item">
              <strong>Movie Booking Website | HTML, CSS, JavaScript, Bootstrap</strong><br />
              <span className="resume-date">2022</span><br />
              - Designed a responsive movie booking website for users to login, filter movie shows, and book tickets.
            </div>
          </section>

          <section>
            <h2 className="resume-section-title">ADDITIONAL EXPERIENCE</h2>
            <ul className="resume-list">
              <li>Internship: Calibration Engineer - PSG CIRD, Coimbatore, JAN-MAR 2022</li>
              <li>Visited Biomedical Technology Wing, Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum, Feb 2020</li>
              <li>Study of Various Medical Equipment, NIMHANS, Bengaluru, Feb 2019</li>
              <li>Gained knowledge from various Biomedical Equipment, PSG Hospital, Coimbatore, 2018</li>
            </ul>
          </section>

          <section>
            <h2 className="resume-section-title">ACHIEVEMENTS AND AWARDS</h2>
            <ul className="resume-list">
              <li>Completed Consultant Virtual Experience Program in ACCENTURE Forage, Nov 2022</li>
              <li>Completed Java Programming: Solving Problems with Software on Coursera (Duke University), April 2022</li>
              <li>Completed Java Programming: Arrays, Lists, and Structured Data on Coursera (Duke University), April 2022</li>
              <li>Front-End Development - HTML, Great Learning App 2021</li>
              <li>Completed Write Professional Emails on Coursera (Georgia Institute of Technology), Aug 2020</li>
              <li>Member: National Service Scheme (NSS) 2017-2021</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
