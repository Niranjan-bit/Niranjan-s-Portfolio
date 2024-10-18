import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import ProjectsInfo from '../assets/data/projects';

const ProjectStyle = styled.div`
  background-color: white;
  padding: 5rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .card-content {
    padding: 1rem;
    h3 {
      font-size: 1.5rem;
      margin: 0.5rem 0;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 60%;
  width: 100%;
  text-align: center;
  img {
    width: 60%;
    max-height: 300px;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 2px solid black;
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  ul {
    text-align: left;
    font-size: 1.2rem;
    list-style-type: disc;
    padding-left: 1.5rem;
  }
  .tech-stack {
    margin-top: 1rem;
    font-size: 1.2rem;
    text-align: left;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    ul {
      list-style-type: none;
      padding-left: 0;
      display: flex;
      gap: 0.5rem;
    }
  }
  .github-link {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #333;
      font-size: 2rem;
      transition: color 0.3s;
      &:hover {
        color: #000;
      }
    }
  }
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const ProjectCard = ({ project, onClick }) => {
  return (
    <Card onClick={onClick}>
      <img src={project.img} alt={project.name} />
      <div className="card-content">
        <h3>{project.name}</h3>
      </div>
    </Card>
  );
};

const ProjectDetailsModal = ({ show, onClose, project }) => {
  if (!show) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <img src={project.img} alt={project.name} />
        <h3>{project.name}</h3>
        <div dangerouslySetInnerHTML={{ __html: project.desc }} />
        <div className="tech-stack">
          <h4>Tech Stack:</h4>
          <ul>
            {project.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="github-link">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default function Projects() {
  const [projectsData, setProjectsData] = useState(ProjectsInfo);
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
    setSelectedProject(null);
  };

  return (
    <>
      <ProjectStyle>
        <div className="container">
          <SectionTitle
            heading="Projects"
            subheading="some of my recent works"
          />
          <div className="projects__allItems">
            {projectsData.map((item) => (
              <ProjectCard
                key={item.id}
                project={item}
                onClick={() => handleProjectClick(item)}
              />
            ))}
          </div>
        </div>
      </ProjectStyle>
      {selectedProject && (
        <ProjectDetailsModal
          show={modalShow}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </>
  );
}
