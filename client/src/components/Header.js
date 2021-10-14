import React from "react";
import Socials from "./Socials";
import { DiCode } from "react-icons/di";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-name">
        {/* <DiCode className="logo"/> */}
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={1500}
          offset={-60}
          activeClass="active-link"
          className="cursor"
        >
          <h5 className="section-title" style={{ fontSize: "2rem" }}>
            Dylan Travis
          </h5>
        </Link>
      </div>
      <div className="header-navigation">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={1500}
          offset={-60}
          activeClass="active-link"
          className="cursor"
        >
          Projects
        </Link>
        <Link
          to="technologies"
          spy={true}
          smooth={true}
          duration={1500}
          offset={-60}
          activeClass="active-link"
          className="cursor"
        >
          Technologies
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={1500}
          offset={-60}
          activeClass="active-link"
          className="cursor"
        >
          About
        </Link>
      </div>
      <Socials />
    </div>
  );
};

export default Header;
