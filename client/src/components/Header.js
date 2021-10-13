import React from "react";
import Socials from "./Socials";
import { DiCode } from "react-icons/di";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-name">
        {/* <DiCode className="logo"/> */}
        <h5>Dylan Travis</h5>
      </div>
      <div className="header-navigation">
        <Link to="projects" spy={true} smooth={true} activeClass="active-link">
          Projects
        </Link>
        <Link
          to="technologies"
          spy={true}
          smooth={true}
          activeClass="active-link"
        >
          Technologies
        </Link>
        <Link to="about" spy={true} smooth={true} activeClass="active-link">
          About
        </Link>
      </div>
      <Socials />
    </div>
  );
};

export default Header;
