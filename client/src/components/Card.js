import React from "react";

const Card = ({ project }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <img alt="project-img" className="card-image" src={project.images[1]} />
        <div style={{ padding: "15px" }}>
          <h3 className="card-name">{project.name}</h3>
          <p className="card-text">{project.description}</p>
        </div>
      </div>

      <div className="card-content-end">
        <p className="card-tech-header">Tech stack</p>
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
          <div className="card-button">Github</div>
          <div className="card-button">Learn More</div>
          <div className="card-button">Live Demo</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
