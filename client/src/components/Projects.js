import React, { useState, useEffect } from "react";
import Card from "./Card";
import backendApi from "../apis/backendApi";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    await backendApi
      .get("/projects")
      .then((response) => {
        if (response) {
          console.log(response);
          return response;
        } else {
          const error = new Error(`Error ${error.status}: ${error.statusText}`);
          error.response = response;
          throw error;
        }
      })
      .then((response) => setProjects(response.data.message));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div id="projects" className="section-container">
      <div className="section-header">
        <h1 className="section-title">Projects</h1>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => {
          return <Card key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
