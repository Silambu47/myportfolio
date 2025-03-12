
// import React, { useState } from "react";
// import Logo from "../images/logo1.png";
// import Logo1 from "../images/logo2.png";
// import Logo2 from "../images/logo3.png";
// import Logo3 from "../images/logo4.png";
// import "./Project.css";
// import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
// import Projectdetails from "./Project_details";
// import { useNavigate } from "react-router-dom";

// const Projects = () => {
//     const [projects] = useState([
//         { id: 0, image: Logo, project_name: 'Project 1', label: 'Power smarter digital relationships' },
//         { id: 1, image: Logo1, project_name: 'Project 2', label: 'Description for Project 2' },
//         { id: 2, image: Logo2, project_name: 'Project 3', label: 'Description for Project 3' },
//         { id: 3, image: Logo3, project_name: 'Project 4', label: 'Description for Project 4' }
//     ]);
//     const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
//     const navigate = useNavigate();

//     const handleImageClick = (index) => {
//         setSelectedProjectIndex(index);
//     };

//     const handleClose = () => {
//         setSelectedProjectIndex(null);
//     };

//     const handleViewAllProjects = () => {
//         navigate('/DataTable');
//     };

//     return (
//         <div className="handsonwork">
//             {selectedProjectIndex === null ? (
//                 <div className="project_container" id="gotoproject" style={{ padding: '20px' }}>
//                     <h1>PROJECTS</h1>
//                     <div className="project_images">
//                         {projects.map((project, index) => (
//                             <div key={project.id} className="project-item" onClick={() => handleImageClick(index)}>
//                                 <img style={{ padding: '30px' }} src={project.image} className="image" alt={`Project ${index + 1}`} />
//                                 <div className="text">{project.project_name}</div>
//                                 <div className="label">{project.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                     {/* <button>View All Projects</button> */}
//                     <button onClick={handleViewAllProjects}>View All Projects</button>
//                 </div>
//             ) : (
//                 <div>
//                     <div className="details_abt_proj" style={{ marginTop: '50px' }}>
//                         <div className="content-opener">
//                             <CloseTwoToneIcon style={{ width: '30px', height: '30px', fontWeight: '800', cursor: 'pointer', marginLeft: '95%' }} onClick={handleClose} />
//                             <div>
//                                 <section className="projct_details">
//                                     <div>
//                                         <Projectdetails selectedProjectIndex={selectedProjectIndex} />
//                                     </div>
//                                 </section>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Projects;


// import React, { useState } from "react";
// import Logo from "../images/logo1.png";
// import Logo1 from "../images/logo2.png";
// import Logo2 from "../images/logo3.png";
// import Logo3 from "../images/logo4.png";
// import "./Project.css";
// import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
// import Projectdetails from "./Project_details";
// import { useNavigate } from "react-router-dom";

// const Projects = () => {
//     const [projects] = useState([
//         { id: 0, image: Logo, project_name: 'Project 1', label: 'Power smarter digital relationships' },
//         { id: 1, image: Logo1, project_name: 'Project 2', label: 'Description for Project 2' },
//         { id: 2, image: Logo2, project_name: 'Project 3', label: 'Description for Project 3' },
//         { id: 3, image: Logo3, project_name: 'Project 4', label: 'Description for Project 4' }
//     ]);
//     const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
//     const navigate = useNavigate();

//     const handleImageClick = (index) => {
//         setSelectedProjectIndex(index);
//     };

//     const handleClose = () => {
//         setSelectedProjectIndex(null);
//     };

//     const handleViewAllProjects = () => {
//         navigate('/DataTable');
//     };

//     return (
//         <div className="handsonwork">
//             {selectedProjectIndex === null ? (
//                 <div className="project_container" id="gotoproject" style={{ padding: '20px' }}>
//                     <h1>PROJECTS</h1>
//                     <div className="project_images">
//                         {projects.map((project, index) => (
//                             <div key={project.id} className="project-item" onClick={() => handleImageClick(index)}>
//                                 <img style={{ padding: '30px' }} src={project.image} className="image" alt={`Project ${index + 1}`} />
//                                 <div className="text">{project.project_name}</div>
//                                 <div className="label">{project.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                     <button onClick={handleViewAllProjects}>View All Projects</button>
//                 </div>
//             ) : (
//                 <div>
//                     <div className="details_abt_proj" style={{ marginTop: '50px' }}>
//                         <div className="content-opener">
//                             <CloseTwoToneIcon style={{ width: '30px', height: '30px', fontWeight: '800', cursor: 'pointer', marginLeft: '95%' }} onClick={handleClose} />
//                             <div>
//                                 <section className="projct_details">
//                                     <div>
//                                         <Projectdetails selectedProjectIndex={selectedProjectIndex} />
//                                     </div>
//                                 </section>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Projects;



// import React, { useState } from "react";
// import Logo from "../images/logo1.png";
// import Logo1 from "../images/logo2.png";
// import Logo2 from "../images/logo3.png";
// import Logo3 from "../images/logo4.png";
// import "./Project.css";
// import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
// import Projectdetails from "./Project_details";
// import { useNavigate } from "react-router-dom";
// import ProjectTable from "../Tablecomponents/Viewtablemat";
// import { Link } from "react-router-dom";


// const Projects = () => {
//     const navigate = useNavigate();
//     const [projects] = useState([
//         { id: 0, image: Logo, project_name: 'Project 1', label: 'Power smarter digital relationships' },
//         { id: 1, image: Logo1, project_name: 'Project 2', label: 'Description for Project 2' },
//         { id: 2, image: Logo2, project_name: 'Project 3', label: 'Description for Project 3' },
//         { id: 3, image: Logo3, project_name: 'Project 4', label: 'Description for Project 4' }
//     ]);
//     const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);


//     const handleImageClick = (index) => {
//         setSelectedProjectIndex(index);
//     };

//     const handleClose = () => {
//         setSelectedProjectIndex(null);
//     };

//     const handleViewAllProjects = () => {
//         navigate('/Viewtablemat');
//     };

//     return (
//         <div className="handsonwork">
//             {selectedProjectIndex === null ? (
//                 <div className="project_container" id="gotoproject" style={{ padding: '20px' }}>
//                     <h1>PROJECTS</h1>
//                     <div className="project_images">
//                         {projects.map((project, index) => (
//                             <div key={project.id} className="project-item" onClick={() => handleImageClick(index)}>
//                                 <img style={{ padding: '30px' }} src={project.image} className="image" alt={`Project ${index + 1}`} />
//                                 <div className="text">{project.project_name}</div>
//                                 <div className="label">{project.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                     {/* <button onClick={handleViewAllProjects}> <Link to="/Viewtable">View All Projects</Link></button> */}

//                     <Link to="/Viewtablemat" style={{ color: 'white' }}>View All Projects</Link>

//                 </div>
//             ) : (
//                 <div>
//                     <div className="details_abt_proj" style={{ marginTop: '50px' }}>
//                         <div className="content-opener">
//                             <CloseTwoToneIcon style={{ width: '30px', height: '30px', fontWeight: '800', cursor: 'pointer', marginLeft: '95%' }} onClick={handleClose} />
//                             <div>
//                                 <section className="projct_details">
//                                     <div>
//                                         <Projectdetails selectedProjectIndex={selectedProjectIndex} />
//                                     </div>
//                                 </section>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Projects;


// import React, { useState } from "react";
// import Logo from "../images/logo1.png";
// import Logo1 from "../images/logo2.png";
// import Logo2 from "../images/logo3.png";
// import Logo3 from "../images/logo4.png";
// import "./Project.css";
// import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
// import ProjectDetails from "./Project_details";
// import { useNavigate, Link } from "react-router-dom";
// import '../Tablecomponents/ProjectTable.css';
// import { useLocation } from "react-router-dom";

// const Projects = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [projects] = useState([
//         { id: 0, image: Logo, project_name: 'Project 1', label: 'Power smarter digital relationships' },
//         { id: 1, image: Logo1, project_name: 'Project 2', label: 'Description for Project 2' },
//         { id: 2, image: Logo2, project_name: 'Project 3', label: 'Description for Project 3' },
//         { id: 3, image: Logo3, project_name: 'Project 4', label: 'Description for Project 4' }
//     ]);
//     const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

//     const handleImageClick = (index) => {
//         setSelectedProjectIndex(index);
//     };

//     const handledisabled = () => {
//         setSelectedProjectIndex(null);
//     };

//     const handleViewAllProjects = () => {
//         navigate('/Viewtablemat');
//     };

//     return (
//         <div>
//             {location.pathname !== '/Viewtablemat' && (
//                 <div className="handsonwork">
//                     {selectedProjectIndex === null ? (
//                         <div className="project_container" id="gotoproject" style={{ padding: '20px' }}>
//                             <h1>PROJECTS</h1>
//                             <div className="project_images">
//                                 {projects.map((project, index) => (
//                                     <div
//                                         key={project.id}
//                                         className="project-item"
//                                         onClick={() => handleImageClick(index)}
//                                     >
//                                         <img
//                                             style={{ padding: '30px' }}
//                                             src={project.image}
//                                             className="image"
//                                             alt={`Project ${index + 1}`}
//                                         />
//                                         <div className="text">{project.project_name}</div>
//                                         <div className="label">{project.label}</div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ) : (
//                         <div>
//                             <div className="details_abt_proj" style={{ marginTop: '50px' }}>
//                                 <div className="content-opener">
//                                     <CloseTwoToneIcon
//                                         style={{
//                                             width: '30px',
//                                             height: '30px',
//                                             fontWeight: '800',
//                                             cursor: 'pointer',
//                                             marginLeft: '95%'
//                                         }}
//                                         onClick={handledisabled}
//                                     />
//                                     <div>
//                                         <section className="projct_details">
//                                             <div>
//                                                 <ProjectDetails selectedProjectIndex={selectedProjectIndex} />
//                                             </div>
//                                         </section>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     <div>
//                         <Link to="/Viewtablemat" style={{ color: 'white' }}>View All Projects</Link>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Projects;


// import React, { useState } from "react";
// import Logo from "../images/logo1.png";
// import Logo1 from "../images/logo2.png";
// import Logo2 from "../images/logo3.png";
// import Logo3 from "../images/logo4.png";
// import "./Project.css";
// import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
// import ProjectDetails from "./Project_details";
// import { useNavigate, Link } from "react-router-dom";
// import '../Tablecomponents/ProjectTable.css';
// import { useLocation } from "react-router-dom";
// import ProjectTable from "../Tablecomponents/ProjectTable"; // Ensure the path is correct

// const Projects = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [projects] = useState([
//         { id: 0, image: Logo, project_name: 'Project 1', label: 'Power smarter digital relationships' },
//         { id: 1, image: Logo1, project_name: 'Project 2', label: 'Description for Project 2' },
//         { id: 2, image: Logo2, project_name: 'Project 3', label: 'Description for Project 3' },
//         { id: 3, image: Logo3, project_name: 'Project 4', label: 'Description for Project 4' }
//     ]);
//     const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
//     const [isTableVisible, setIsTableVisible] = useState(false);

//     const handleImageClick = (index) => {
//         setSelectedProjectIndex(index);
//     };

//     const handleClose = () => {
//         setSelectedProjectIndex(null);
//         setIsTableVisible(false);
//     };

//     const handleViewAllProjects = () => {
//         setIsTableVisible(true);
//     };

//     return (
//         <div>
//             {location.pathname !== '/Viewtablemat' && (
//                 <div className="handsonwork">
//                     {selectedProjectIndex === null && !isTableVisible ? (
//                         <div className="project_container" id="gotoproject" style={{ padding: '20px' }}>
//                             <h1>PROJECTS</h1>
//                             <div className="project_images">
//                                 {projects.map((project, index) => (
//                                     <div
//                                         key={project.id}
//                                         className="project-item"
//                                         onClick={() => handleImageClick(index)}
//                                     >
//                                         <img
//                                             style={{ padding: '30px' }}
//                                             src={project.image}
//                                             className="image"
//                                             alt={`Project ${index + 1}`}
//                                         />
//                                         <div className="text">{project.project_name}</div>
//                                         <div className="label">{project.label}</div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ) : isTableVisible ? (
//                         <ProjectTable onClose={handleClose} />
//                     ) : (
//                         <div>
//                             <div className="details_abt_proj" style={{ marginTop: '50px' }}>
//                                 <div className="content-opener">
//                                     <CloseTwoToneIcon
//                                         style={{
//                                             width: '30px',
//                                             height: '30px',
//                                             fontWeight: '800',
//                                             cursor: 'pointer',
//                                             marginLeft: '95%'
//                                         }}
//                                         onClick={handleClose}
//                                     />
//                                     <div>
//                                         <section className="projct_details">
//                                             <div>
//                                                 <ProjectDetails selectedProjectIndex={selectedProjectIndex} />
//                                             </div>
//                                         </section>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     <div>
//                         <Link to="/Viewtablemat" style={{ color: 'white' }}>View All Projects</Link>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Projects;

// import React, { useState } from "react";
// import Logo from "../images/logo1.png";
// import Logo1 from "../images/logo2.png";
// import Logo2 from "../images/logo3.png";
// import Logo3 from "../images/logo4.png";
// import "./Project.css";
// import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
// import ProjectDetails from "./Project_details";
// import { useNavigate, Link } from "react-router-dom";
// import '../Tablecomponents/ProjectTable.css';
// import { useLocation } from "react-router-dom";
// import ProjectTable from "../Tablecomponents/ProjectTable"; // Ensure the path is correct

// const Projects = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [projects] = useState([
//         { id: 0, image: Logo, project_name: 'Project 1', label: 'Power smarter digital relationships' },
//         { id: 1, image: Logo1, project_name: 'Project 2', label: 'Description for Project 2' },
//         { id: 2, image: Logo2, project_name: 'Project 3', label: 'Description for Project 3' },
//         { id: 3, image: Logo3, project_name: 'Project 4', label: 'Description for Project 4' }
//     ]);
//     const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
//     const [isTableVisible, setIsTableVisible] = useState(false);

//     const handleImageClick = (index) => {
//         setSelectedProjectIndex(index);
//     };

//     const handleClose = () => {
//         setSelectedProjectIndex(null);
//         setIsTableVisible(false);
//     };

//     const handleViewAllProjects = () => {
//         setIsTableVisible(true);
//     };

//     return (
//         <div>
//             {location.pathname !== '/Viewtablemat' && (
//                 <div className="handsonwork">
//                     {selectedProjectIndex === null && !isTableVisible ? (
//                         <div className="project_container" id="gotoproject" style={{ padding: '20px' }}>
//                             <h1>PROJECTS</h1>
//                             <div className="project_images">
//                                 {projects.map((project, index) => (
//                                     <div
//                                         key={project.id}
//                                         className="project-item"
//                                         onClick={() => handleImageClick(index)}
//                                     >
//                                         <img
//                                             style={{ padding: '30px' }}
//                                             src={project.image}
//                                             className="image"
//                                             alt={`Project ${index + 1}`}
//                                         />
//                                         <div className="text">{project.project_name}</div>
//                                         <div className="label">{project.label}</div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ) : isTableVisible ? (
//                         <ProjectTable onClose={handleClose} />
//                     ) : (
//                         <div>
//                             <div className="details_abt_proj" style={{ marginTop: '50px' }}>
//                                 <div className="content-opener">
//                                     <CloseTwoToneIcon
//                                         style={{
//                                             width: '30px',
//                                             height: '30px',
//                                             fontWeight: '800',
//                                             cursor: 'pointer',
//                                             marginLeft: '95%'
//                                         }}
//                                         onClick={handleClose}
//                                     />
//                                     <div>
//                                         <section className="projct_details">
//                                             <div>
//                                                 <ProjectDetails selectedProjectIndex={selectedProjectIndex} />
//                                             </div>
//                                         </section>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     <div>
//                         <button onClick={handleViewAllProjects} style={{ color: 'white' }}>View All Projects</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Projects;





// import React, { useState } from "react";
// import Logo from "../images/logo1.png";
// import Logo1 from "../images/logo2.png";
// import Logo2 from "../images/logo3.png";
// import Logo3 from "../images/logo4.png";
// import "./Project.css";
// import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
// import ProjectDetails from "./Project_details";
// import { Link, useLocation } from "react-router-dom";
// import '../Tablecomponents/ProjectTable.css';
// import ProjectTable from "../Tablecomponents/ProjectTable"; // Ensure the path is correct

// const Projects = () => {
//     const location = useLocation();
//     const [projects] = useState([
//         { id: 0, image: Logo, project_name: 'Project 1', label: 'Power smarter digital relationships' },
//         { id: 1, image: Logo1, project_name: 'Project 2', label: 'Description for Project 2' },
//         { id: 2, image: Logo2, project_name: 'Project 3', label: 'Description for Project 3' },
//         { id: 3, image: Logo3, project_name: 'Project 4', label: 'Description for Project 4' }
//     ]);
//     const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
//     const [isTableVisible, setIsTableVisible] = useState(false);

//     const handleImageClick = (index) => {
//         setSelectedProjectIndex(index);
//     };

//     const handleClose = () => {
//         setSelectedProjectIndex(null);
//         setIsTableVisible(false);
//     };

//     const handleViewAllProjects = () => {
//         setIsTableVisible(true);
//     };

//     const element = document.getElementById('viweall');
//     if (element) {
//         element.classList.add('hidden');
//     }

//     return (
//         <div>
//             {location.pathname !== '/Viewtablemat' && (
//                 <div className="handsonwork">
//                     {selectedProjectIndex === null && !isTableVisible ? (
//                         <div className="project_container" id="gotoproject" style={{ padding: '20px' }}>
//                             <h1>PROJECTS</h1>
//                             <div className="project_images">
//                                 {projects.map((project, index) => (
//                                     <div
//                                         key={project.id}
//                                         className="project-item"
//                                         onClick={() => handleImageClick(index)}
//                                     >
//                                         <img
//                                             style={{ padding: '30px' }}
//                                             src={project.image}
//                                             className="image"
//                                             alt={`Project ${index + 1}`}
//                                         />
//                                         <div className="text">{project.project_name}</div>
//                                         <div className="label">{project.label}</div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ) : isTableVisible ? (
//                         <ProjectTable onClose={handleClose} />
//                     ) : (
//                         <div>
//                             <div className="details_abt_proj" style={{ marginTop: '50px' }}>
//                                 <div className="content-opener">
//                                     <CloseTwoToneIcon
//                                         style={{
//                                             width: '30px',
//                                             height: '30px',
//                                             fontWeight: '800',
//                                             cursor: 'pointer',
//                                             marginLeft: '95%'
//                                         }}
//                                         onClick={handleClose}
//                                     />
//                                     <div>
//                                         <section className="projct_details">
//                                             <div>
//                                                 <ProjectDetails selectedProjectIndex={selectedProjectIndex} />
//                                             </div>
//                                         </section>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     {/* <div style={{ display: 'block', justifyContent: 'center', alignItems: 'center' }} id ='viweall' className="viewall">
//                         <button onClick={handleViewAllProjects} style={{ color: 'white', justifyContent: 'center', textAlign: 'center', width: '150px', height: '40px', borderRadius: '10px', background: '#f1f1f1' }}>View All Projects</button>
//                     </div> */}

//                     <div id='viweall' className="viewall">
//                         <button
//                             onClick={handleViewAllProjects}
//                             className="viewall-button"
//                         >
//                             View All Projects
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };


// export default Projects;

import React, { useState } from "react";
import Logo from "../images/logo1.png";
import Logo1 from "../images/logo2.png";
import Logo2 from "../images/logo3.png";
import Logo3 from "../images/logo4.png";
import "./Project.css";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import ProjectDetails from "./Project_details";
import { Link, useLocation } from "react-router-dom";
import '../Tablecomponents/ProjectTable.css';
import ProjectTable from "../Tablecomponents/ProjectTable";
import "./Project_details.css"; 

const Projects = () => {
    const location = useLocation();
    const [projects] = useState([
        { id: 0, image: Logo, project_name: 'Project 1', label: 'Power smarter digital relationships' },
        { id: 1, image: Logo1, project_name: 'Project 2', label: 'Description for Project 2' },
        { id: 2, image: Logo2, project_name: 'Project 3', label: 'Description for Project 3' },
        { id: 3, image: Logo3, project_name: 'Project 4', label: 'Description for Project 4' }
    ]);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
    const [isTableVisible, setIsTableVisible] = useState(false);

    const handleImageClick = (index) => {
        setSelectedProjectIndex(index);
    };

    const handleClose = () => {
        setSelectedProjectIndex(null);
        setIsTableVisible(false);
    };

    const handleViewAllProjects = () => {
        setIsTableVisible(true);
    };

    return (
        <div className="projectpage" id ='projectpage'>
            {location.pathname !== '/Viewtablemat' && (
                <div className="handsonwork">
                    {selectedProjectIndex === null && !isTableVisible ? (
                        <div className="project_container" id="gotoproject" style={{ padding: '20px' }}>
                            <h1>Some of my works</h1>
                            <div className="project_images">
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className="project-item"
                                        onClick={() => handleImageClick(index)}
                                    >
                                        <img
                                            style={{ padding: '30px' }}
                                            src={project.image}
                                            className="image"
                                            alt={`Project ${index + 1}`}
                                        />
                                        <div className="text">{project.project_name}</div>
                                        <div className="label">{project.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : isTableVisible ? (
                        <ProjectTable onClose={handleClose} />
                    ) : (
                        <div>
                            <div className="details_abt_proj" style={{ marginTop: '50px' }}>
                                <div className="content-opener">
                                    <CloseTwoToneIcon
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            fontWeight: '800',
                                            cursor: 'pointer',
                                            marginLeft: '95%'
                                        }}
                                        onClick={handleClose}
                                    />
                                    <div>
                                        <section className="projct_details">
                                            <div>
                                                <ProjectDetails selectedProjectIndex={selectedProjectIndex} />
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {!isTableVisible && (
                        <div id='viweall' className="viewall">
                            <button onClick={handleViewAllProjects}className="viewall-button" >View All Projects</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Projects;
