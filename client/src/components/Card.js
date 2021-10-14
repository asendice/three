import React from "react";

const Card = ({ project }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={project.images[1]} />
      <div className="card-content">
        <h3 className="card-name">{project.name}</h3>
        <p className="card-text">{project.description}</p>
      </div>
      <p className="card-tech-header">Tech-Stack</p>
      <div className="card-stack">
        {project.skills.map((skill) => {
          return <div className="card-tech">{skill}</div>;
        })}
      </div>
      <div className="card-buttons-container">
        <div className="card-button">Github</div>
        <div className="card-button">Learn More</div>
        <div className="card-button">Live Demo</div>
      </div>
    </div>
  );
};

export default Card;
