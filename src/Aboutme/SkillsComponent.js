// import React from 'react';
// import './SkillsComponent.css';
// import { FaCode, FaPaintBrush, FaTools, FaLightbulb } from 'react-icons/fa';
// import { SiJavascript, SiHtml5, SiCss3, SiReact } from 'react-icons/si';
// import { AiFillGithub, AiOutlineTool } from 'react-icons/ai';
// import { BsFileEarmarkCode } from 'react-icons/bs';
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">


// const SkillsComponent = () => {
//     return (
//         <div className="aboutme">
//             <div>
//                 <h2 className="skills-title">what-i-do</h2>
//                 <section className="what-i-do">
//                     <div className="item">
//                         <h2>Web Development</h2>
//                         <p>Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.</p>
//                     </div>
//                     <div className="item">
//                         <h2>Responsive UI Design</h2>
//                         <p>"A user interface is like a joke. If you have to explain it, it's not that good." I strive to develop and implement responsive and aesthetically pleasing interfaces for websites and apps that adapt to any type of device, platform, or browser.</p>
//                     </div>
//                     <div className="item">
//                         <h2>Experience Design</h2>
//                         <p>There have been far too many times where I've been trying to accomplish a simple task on a website, and ended up wanting to throw my computer out the window in frustration. Needless to say, user experience is an aspect of software I believe is vital to a successful product.</p>
//                     </div>
//                     <div className="item">
//                         <h2>Diversity in Tech</h2>
//                         <p>Beyond coding, I am a strong advocate for diversity in the tech industry, especially for women. I currently serve as President for Northeastern's women in tech club, NUWIT, and was a 2016 Grace Hopper Conference Scholar.</p>
//                     </div>
//                 </section>
//             </div>
//             <div className="skills-container">
//                 <h2 className="skills-title">Skills</h2>
//                 <div className="skills-content">
//                     <div className="skill-section development">
//                         <FaCode className="skill-icon" />
//                         <h4>Development</h3>
//                         <div className="skill-items">
//                             <div className="skill-item"><SiJavascript /> JavaScript</div>
//                             <div className="skill-item"><SiHtml5 /> HTML5</div>
//                             <div className="skill-item"><SiCss3 /> CSS3</div>
//                             <div className="skill-item"><SiReact /> React</div>
//                         </div>
//                     </div>

//                     <div className="skill-section design">
//                         <FaPaintBrush className="skill-icon" />
//                         <h3>Design</h3>
//                         <div className="skill-items design-icons">
//                             <div className="design-icon">Ps</div>
//                             <div className="design-icon">Id</div>
//                             <div className="design-icon">Ai</div>
//                             <div className="design-icon">InVision</div>
//                         </div>
//                     </div>

//                     <div className="skill-section tools">
//                         <FaTools className="skill-icon" />
//                         <h3>Tools</h3>
//                         <ul className="tools-list">
//                             <li><AiFillGithub /> Git + Github</li>
//                             <li><AiOutlineTool /> Command Line</li>
//                             <li><FaLightbulb /> Chrome DevTools</li>
//                             <li><BsFileEarmarkCode /> Grunt + Gulp</li>
//                             <li><FaLightbulb /> Postman</li>
//                         </ul>
//                     </div>

//                     <div className="skill-section knowledge">
//                         <FaLightbulb className="skill-icon" />
//                         <h3>Knowledge</h3>
//                         <ul className="knowledge-list">
//                             <li><SiJavascript /> CSS Detangling</li>
//                             <li><SiJavascript /> ECMAScript 6</li>
//                             <li><FaLightbulb /> Usability</li>
//                             <li><FaLightbulb /> SEO</li>
//                             <li><FaLightbulb /> TDD</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className='about_mine'>
//                 <h2 className="skills-title">Where I Came From</h2>
//                 <div className='personal'>
//                     <p>Now that you know me, I believe there's no need to repeat my name. I hail from a small village called Srinivasapuram in the Ariyalur District of Tamil Nadu. I've already mentioned my schooling and graduation above, so that's all about my educational background.
//                         I'm not the most talkative person, but I'm an excellent listener. However, when a topic interests me, or relates to my passions, you might find me quite talkative as I enjoy diving deep into subjects I care about.
//                         I'm a passionate cricket and music lover—while I can play cricket well, singing isn't my forte. I'm also an avid movie enthusiast.
//                         As a great team player, I easily adapt to different situations and move accordingly. I strive to learn quickly, so you won't have to worry about training me extensively.
//                     </p>
//                 </div>



//                 {/* <div class="timeline">
//                 <div class="timeline-item">
//                     <span class="timeline-date">2014 - 2015</span>
//                     <div class="timeline-icon">
//                         <i class="fas fa-school"></i>
//                     </div>
//                     <div class="timeline-content">
//                         <p>Secondary Education</p>
//                         <p>Govt. HS School, Kamarasavalli, Ariyalur</p>
//                         <p>Secured 95.20%</p>
//                     </div>
//                 </div>

//                 <div class="timeline-item">
//                     <span class="timeline-date">2016 - 2017</span>
//                     <div class="timeline-icon">
//                         <i class="fas fa-graduation-cap"></i>
//                     </div>
//                     <div class="timeline-content">
//                         <p>Higher Secondary Education</p>
//                         <p>Raja Vignesh HS School, Melamathur</p>
//                         <p>Secured 94.08%</p>
//                     </div>
//                 </div>

//                 <div class="timeline-item">
//                     <span class="timeline-date">2017 - 2021</span>
//                     <div class="timeline-icon">
//                         <i class="fas fa-university"></i>
//                     </div>
//                     <div class="timeline-content">
//                         <p>Bachelor of Engineering (Biomedical Engineering)</p>
//                         <p>PSG College of Technology, Coimbatore</p>
//                         <p>Secured CGPA: 7.11</p>
//                     </div>
//                 </div>

//                 <div class="timeline-item">
//                     <span class="timeline-date">Jan - Mar 2022</span>
//                     <div class="timeline-icon">
//                         <i class="fas fa-briefcase"></i>
//                     </div>
//                     <div class="timeline-content">
//                         <p>Internship: Calibration Engineer</p>
//                         <p>PSG CIRD, Coimbatore</p>
//                     </div>
//                 </div>

//                 <div class="timeline-item">
//                     <span class="timeline-date">2022</span>
//                     <div class="timeline-icon">
//                         <i class="fas fa-briefcase"></i>
//                     </div>
//                     <div class="timeline-content">
//                         <p>Application & Service Engineer</p>
//                         <p>Golechha Healthcare, Chennai</p>
//                     </div>
//                 </div>

//                 <div class="timeline-item">
//                     <span class="timeline-date">2022</span>
//                     <div class="timeline-icon">
//                         <i class="fas fa-briefcase"></i>
//                     </div>
//                     <div class="timeline-content">
//                         <p>Associate Trainee</p>
//                         <p>Poweschool Neverskip, Chennai</p>
//                     </div>
//                 </div>

//                 <div class="timeline-item">
//                     <div class="timeline-icon">
//                         <i class="fas fa-rocket"></i>
//                     </div>
//                     <div class="timeline-content">
//                         <h3>Looking for New Horizons</h3>
//                         <p>Currently seeking new opportunities to expand my horizons and contribute to innovative projects.</p>
//                     </div>
//                 </div>
//             </div> */}

//                 <ul class="timeline">
//                     <li class="timeline-item">
//                         <span class="timeline-date">2014 - 2015</span>
//                         <div class="timeline-icon">
//                             <i class="fa fa-graduation-cap"></i>
//                         </div>
//                         <div class="timeline-content">
//                             <h3>Secondary Education</h3>
//                             <p>Govt. HS School, Kamarasavalli, Ariyalur</p>
//                             <p>Secured 95.20%</p>
//                         </div>
//                     </li>
//                     <li class="timeline-item">
//                         <span class="timeline-date">2016 - 2017</span>
//                         <div class="timeline-icon">
//                             <i class="fa fa-graduation-cap"></i>
//                         </div>
//                         <div class="timeline-content">
//                             <h3>Higher Secondary Education</h3>
//                             <p>Raja Vignesh HS School, Melamathur</p>
//                             <p>Secured 94.08%</p>
//                         </div>
//                     </li>
//                     <li class="timeline-item">
//                         <span class="timeline-date">2014 - 2015</span>
//                         <div class="timeline-icon">
//                             <i class="fa fa-graduation-cap"></i>
//                         </div>
//                         <div class="timeline-content">
//                             <h3>Secondary Education</h3>
//                             <p>Govt. HS School, Kamarasavalli, Ariyalur</p>
//                             <p>Secured 95.20%</p>
//                         </div>
//                     </li>
//                     <li class="timeline-item">
//                         <span class="timeline-date">2014 - 2015</span>
//                         <div class="timeline-icon">
//                             <i class="fa fa-graduation-cap"></i>
//                         </div>
//                         <div class="timeline-content">
//                             <h3>Secondary Education</h3>
//                             <p>Govt. HS School, Kamarasavalli, Ariyalur</p>
//                             <p>Secured 95.20%</p>
//                         </div>
//                     </li>
//                     <li class="timeline-item">
//                         <span class="timeline-date">2014 - 2015</span>
//                         <div class="timeline-icon">
//                             <i class="fa fa-graduation-cap"></i>
//                         </div>
//                         <div class="timeline-content">
//                             <h3>Secondary Education</h3>
//                             <p>Govt. HS School, Kamarasavalli, Ariyalur</p>
//                             <p>Secured 95.20%</p>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default SkillsComponent;

import React from 'react';
import './SkillsComponent.css';
import { FaCode, FaPaintBrush, FaTools, FaLightbulb } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiReact } from 'react-icons/si';
import { AiFillGithub, AiOutlineTool } from 'react-icons/ai';
import { BsFileEarmarkCode } from 'react-icons/bs';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
const SkillsComponent = () => {
    return (
        <div className="aboutme">
            <div>
                <h2 className="skills-title">What I Do</h2>
                <section className="what-i-do">
                    <div className="item">
                        <h2>Web Development</h2>
                        <p>Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt, I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.</p>
                    </div>
                    <div className="item">
                        <h2>Responsive UI Design</h2>
                        <p>"A user interface is like a joke. If you have to explain it, it's not that good." I strive to develop and implement responsive and aesthetically pleasing interfaces for websites and apps that adapt to any type of device, platform, or browser.</p>
                    </div>
                    <div className="item">
                        <h2>Experience Design</h2>
                        <p>There have been far too many times where I've been trying to accomplish a simple task on a website, and ended up wanting to throw my computer out the window in frustration. Needless to say, user experience is an aspect of software I believe is vital to a successful product.</p>
                    </div>
                    <div className="item">
                        <h2>Diversity in Tech</h2>
                        <p>Beyond coding, I am a strong advocate for diversity in the tech industry, especially for women. I currently serve as President for Northeastern's women in tech club, NUWIT, and was a 2016 Grace Hopper Conference Scholar.</p>
                    </div>
                </section>
            </div>
            <div className="skills-container">
                <h2 className="skills-title">Skills</h2>
                <div className="skills-content">
                    <div className="skill-section development">
                        <FaCode className="skill-icon" />
                        <h3>Development</h3>
                        <div className="skill-items">
                            <div className="skill-item"><SiJavascript /> JavaScript</div>
                            <div className="skill-item"><SiHtml5 /> HTML5</div>
                            <div className="skill-item"><SiCss3 /> CSS3</div>
                            <div className="skill-item"><SiReact /> React</div>
                        </div>
                    </div>

                    <div className="skill-section design">
                        <FaPaintBrush className="skill-icon" />
                        <h3>Design</h3>
                        <div className="skill-items design-icons">
                            <div className="design-icon">Ps</div>
                            <div className="design-icon">Id</div>
                            <div className="design-icon">Ai</div>
                            <div className="design-icon">InVision</div>
                        </div>
                    </div>

                    <div className="skill-section tools">
                        <FaTools className="skill-icon" />
                        <h3>Tools</h3>
                        <ul className="tools-list">
                            <li><AiFillGithub /> Git + Github</li>
                            <li><AiOutlineTool /> Command Line</li>
                            <li><FaLightbulb /> Chrome DevTools</li>
                            <li><BsFileEarmarkCode /> Grunt + Gulp</li>
                            <li><FaLightbulb /> Postman</li>
                        </ul>
                    </div>

                    <div className="skill-section knowledge">
                        <FaLightbulb className="skill-icon" />
                        <h3>Knowledge</h3>
                        <ul className="knowledge-list">
                            <li><SiJavascript /> CSS Detangling</li>
                            <li><SiJavascript /> ECMAScript 6</li>
                            <li><FaLightbulb /> Usability</li>
                            <li><FaLightbulb /> SEO</li>
                            <li><FaLightbulb /> TDD</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='about_mine'>
                <div>
                    <h2 className="skills-title">Where I Came From</h2>
                    <div className='personal'>
                        <p>Now that you know me, I believe there's no need to repeat my name. I hail from a small village called Srinivasapuram in the Ariyalur District of Tamil Nadu. I've already mentioned my schooling and graduation above, so that's all about my educational background.
                            I'm not the most talkative person, but I'm an excellent listener. However, when a topic interests me, or relates to my passions, you might find me quite talkative as I enjoy diving deep into subjects I care about.
                            I'm a passionate cricket and music lover—while I can play cricket well, singing isn't my forte. I'm also an avid movie enthusiast.
                            As a great team player, I easily adapt to different situations and move accordingly. I strive to learn quickly, so you won't have to worry about training me extensively.
                        </p>
                    </div>
                </div>
                <div className='flowchart' style={{ 'margin': '100px' }}>
                    <ul className="timeline">
                        <li className="timeline-item">
                            <span className="timeline-date">2014 - 2015</span>
                            <div className="timeline-icon">
                                <SchoolIcon />
                            </div>
                            <div className="timeline-content">
                                <h4>Secondary Education</h4>
                                <p>Govt. HS School, Kamarasavalli, Ariyalur</p>
                                <p>Secured 95.20%</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            {/* <span className="timeline-date">2016 - 2017</span>
                         */}
                            <span style={{ left: '300px' }}>2016 - 20</span>
                            <div className="timeline-icon">
                                <SchoolIcon />
                            </div>
                            <div className="timeline-content">
                                <h4>Higher Secondary Education</h4>
                                <p>Raja Vignesh HS School, Melamathur</p>
                                <p>Secured 94.08%</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <span className="timeline-date">2017 - 2021</span>
                            <div className="timeline-icon">
                                {/* <i className="fa fa-university"></i> */}
                            </div>
                            <div className="timeline-content">
                                <h4>Bachelor of Engineering (Biomedical Engineering)</h4>
                                <p>PSG College of Technology, Coimbatore</p>
                                <p>Secured CGPA: 7.11</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <span className="timeline-date">Jan - Mar 2022</span>
                            <div className="timeline-icon">
                                <WorkIcon />
                            </div>
                            <div className="timeline-content">
                                <h4>Internship: Calibration Engineer</h4>
                                <p>PSG CIRD, Coimbatore</p>
                            </div>
                        </li>

                        <li className="timeline-item">
                            <div className="timeline-icon">
                                <RocketLaunchIcon />
                            </div>
                            <div className="timeline-content">
                                <h4>Looking for New Horizons</h4>
                                <p>Currently seeking new opportunities to expand my horizons and contribute to innovative projects.</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <span className="timeline-date">2022</span>
                            <div className="timeline-icon">
                                <WorkIcon />
                            </div>
                            <div className="timeline-content">
                                <h4>Associate Trainee</h4>
                                <p>Poweschool Neverskip, Chennai</p>
                            </div>
                        </li>
                        <li className="timeline-item">
                            <span className="timeline-date">2022</span>
                            <div className="timeline-icon">
                                <WorkIcon />
                            </div>
                            <div className="timeline-content">
                                <h4>Application & Service Engineer</h4>
                                <p>Golechha Healthcare, Chennai</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SkillsComponent;


