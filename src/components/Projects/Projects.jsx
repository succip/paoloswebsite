import React from "react";
import projects from "../../assets/data/projects";

const Projects = () => {
  return (
    <React.Fragment>
      <h3>Collection of the fun things I've done</h3>
      {projects.map((project, index) => (
        <div key={index}>
          <a href={project.link} target="_blank" rel="noreferrer">
            {project.title}
          </a>
          <img src={`../../assets/images/${project.image}`} alt="gallery" />
          <p>{project.description}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Projects;
