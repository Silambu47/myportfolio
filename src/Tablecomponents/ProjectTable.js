import React from 'react';
import './ProjectTable.css';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

const ProjectTable = ({ onClose }) => {
  const projects = [
    {
      year: 2023,
      project: 'Emerson Collective',
      madeAt: 'Upstatement',
      builtWith: ['Next.js', 'TypeScript', 'SCSS', 'Contentful'],
      link: 'https://emersoncollective.com',
    },
    {
      year: 2023,
      project: 'Harvard Business School Next.js Site',
      madeAt: 'Upstatement',
      builtWith: ['React', 'TypeScript', 'Next.js', 'Contentful'],
      link: 'https://hbs.edu',
    },
    {
      year: 2023,
      project: 'Emerson Collective',
      madeAt: 'Upstatement',
      builtWith: ['Next.js', 'TypeScript', 'SCSS', 'Contentful'],
      link: 'https://responsiveweb-60031915870.development.catalystserverless.in/app/index.html#',
    },
    {
      year: 2023,
      project: 'Emerson Collective',
      madeAt: 'Upstatement',
      builtWith: ['Next.js', 'TypeScript', 'SCSS', 'Contentful'],
      link: 'https://emersoncollective.com',
    },
    {
      year: 2023,
      project: 'Emerson Collective',
      madeAt: 'Upstatement',
      builtWith: ['Next.js', 'TypeScript', 'SCSS', 'Contentful'],
      link: 'https://emersoncollective.com',
    }
  ];

  return (
    <div className='task-table'>
      <div className="project-table-container">
        <h2 style={{ textAlign: 'center' }}>All Projects</h2>
        {/* <div className="content-opener"> */}
          <CloseTwoToneIcon className="close-icon"  style={{display:'flex',float:'right',marginTop:'-30px'}} onClick={onClose} />
        {/* </div> */}
        <table className="project-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Project</th>
              <th>Made at</th>
              <th>Built with</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.year}</td>
                <td>{project.project}</td>
                <td>{project.madeAt}</td>
                <td>
                  {project.builtWith.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </td>
                <td>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {new URL(project.link).hostname}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;

