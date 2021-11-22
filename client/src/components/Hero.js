import React from "react";
import { Link } from "react-scroll";

const Hero = ({ text }) => {
  return (
    <div id="hero" className="hero-container">
      <div className="hero-left">
        <h1 className="section-title">
          Welcome To <br />
          My Personal Portfolio
        </h1>
        <p className="hero-text">{text}</p>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={1500}
          activeClass="active-link"
          className="hero-button"
        >
          Learn More
        </Link>
      </div>
      <div className="hero-right"></div>
    </div>
  );
};

export default Hero;
