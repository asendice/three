import React from "react";

const Card = ({ project }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={project.images[0]} />
      <div className="card-content">
        <h3 className="card-name">{project.name}</h3>
        <p className="card-text">{project.description}</p>
      </div>
    </div>
  );
};

export default Card;
