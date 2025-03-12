import { useState } from "react";
import './ExperienceComponent.css';

function Experience1() {
    const [experiences] = useState([
        {
            contribution: '2024 — PRESENT',
            role: 'Senior Frontend Engineer, Accessibility',
            place: 'Klaviyo',
            roleDescription: `Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.`,
            skills: 'JavaScript, TypeScript, React, Storybook',
        },
        {
            contribution: '2018 — 2024',
            role: 'Lead Engineer',
            place: 'Upstatement',
            roleDescription: `Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within the engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.`,
            skills: 'JavaScript, TypeScript, React, Storybook',
        },
        {
            contribution: '2018 — 2024',
            role: 'Lead Engineer',
            place: 'Upstatement',
            roleDescription: `Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within the engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.`,
            skills: 'JavaScript, TypeScript, React, Storybook',
        },
    ]);

    return (
        <div className="experiencepage" id="experiencepage">
            <div className="container_box">
                {experiences.map((experience, index) => (
                    <div className="experience" id="experience" key={index}>
                        <div className="exp-content">
                            <div>
                                <h2>{experience.contribution}</h2>
                            </div>
                            <div className="exp_role">
                                <h3>{experience.role} · {experience.place} <a href="#">↗</a></h3>
                                <p>{experience.roleDescription}</p>
                                <div className="skills">
                                    {experience.skills.split(',').map((skill, index) => (
                                        <span key={index}>{skill.trim()}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience1;

