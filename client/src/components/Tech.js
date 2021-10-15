import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaBootstrap,
  FaNpm,
  FaGithub,
} from "react-icons/fa";
import { DiReact, DiFirebase } from "react-icons/di";
import {
  SiJavascript,
  SiRedux,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
const Technologies = () => {
  const arr = [
    {
      icon: <DiReact size={50} color="grey" />,
      name: "React",
    },
    {
      icon: <DiReact size={50} color="grey" />,
      name: "React-Native",
    },
    {
      icon: <SiRedux size={50} color="grey" />,
      name: "Redux",
    },
    {
      icon: <SiJavascript size={50} color="grey" />,
      name: "Javascipt",
    },
    {
      icon: <FaHtml5 size={50} className="icon" color="grey" />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt size={50} color="grey" />,
      name: "CSS",
    },
    {
      icon: <FaSass size={50} color="grey" />,
      name: "Sass",
    },
    {
      icon: <FaBootstrap size={50} color="grey" />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss size={50} color="grey" />,
      name: "Tailwind Css",
    },
    {
      icon: <FaNodeJs size={50} color="grey" />,
      name: "Node JS",
    },
    {
      icon: <SiMongodb size={50} color="grey" />,
      name: "Mongo DB",
    },
    {
      icon: <DiFirebase size={50} color="grey" />,
      name: "Firebase",
    },
    {
      icon: <FaNpm size={50} color="grey" />,
      name: "NPM",
    },
    {
      icon: <FaGithub size={50} color="grey" />,
      name: "Github",
    },
  ];

  return (
    <div id="technologies" className="section-container">
      <div className="section-header">
        <h1 className="section-title">Technologies</h1>
      </div>

      <div className="tech-container">
        <p className="hero-text">
          Here are all of the technologies that I have used and am actively creating
          projects with.
        </p>
        <div className="tech-icon-container">
          {arr.map((item, index) => {
            return (
              <div key={index} className="tech-icon">
                {item.icon}
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
