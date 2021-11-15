import React from "react";

const Card = ({ project }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <img
          alt={`${project.name} display image`}
          className="card-image"
          src={project.images[1]}
        />
        <div style={{ padding: "15px" }}>
          <h1 className="card-name">{project.name}</h1>
          <p className="card-text">{project.description}</p>
        </div>
      </div>

      <div className="card-content-end">
        <p className="card-tech-header">Technologies</p>
        <div className="card-stack">
          {project.skills.map((skill, index) => {
            return (
              <div key={index} className="card-tech">
                {skill}
              </div>
            );
          })}
        </div>
        <div className="card-buttons-container">
          <a
            href={project.gitHub}
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div className="card-button cursor">Github</div>
          </a>

          {project.live.length > 0 && (
            <a
              href={project.live}
              rel="noopener noreferrer"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className="card-button cursor">Live Demo</div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
