import React, {useState, useEffect} from "react";
import axios from 'axios';

const Projects = () => {
const [projects, setProjects] = useState([]);

  // const getProjects = async ()  => {
  //   await axios.get()
  // }


  return (
    <div className="section-container">
      <div className="section-header">
        <h1 className="section-title">Projects</h1>
      </div>
    </div>
  );
};

export default Projects;
