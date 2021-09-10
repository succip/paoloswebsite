import React from "react";
import projects from "../../assets/data/projects";

const Projects = () => {
  return (
    <div className="mx-auto text-center">
      <h3>Collection of the fun things I've done</h3>
      {projects.map((project, index) => (
        <div key={index}>
          <a className="d-block h4" href={project.link} target="_blank" rel="noreferrer">
            {project.title}
          </a>
          <a href={project.link} target="_blank" rel="noreferrer">
            <img className="col-sm-6 d-block mx-auto" src={project.image} alt="" />
          </a>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
