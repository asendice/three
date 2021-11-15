import React, { useState, useEffect } from "react";
import Socials from "./Socials";
import { Link } from "react-scroll";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 800) {
      setActive(false);
    }
  }, [window.innerWidth]);
  return (
    <div>
      <div className="header-container">
        <div className="header-name">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={1500}
            // offset={-60}
            activeClass="active-link"
            className="cursor"
          >
            <h5 className="section-title" style={{ fontSize: "2rem" }}>
              Dylan Travis
            </h5>
          </Link>
        </div>
        <div className="header-navigation-container">
          <div className="header-navigation">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={1500}
              // offset={-60}
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
              // offset={-60}
              activeClass="active-link"
              className="cursor"
            >
              Tech
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={1500}
              // offset={-60}
              activeClass="active-link"
              className="cursor"
            >
              About Me
            </Link>
          </div>
          <div className="socials-header">
            <Socials />
          </div>
        </div>

        <div onClick={() => setActive(!active)} className="burger-container">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className={`mobile-menu ${active && "mobile-menu-active"}`}>
        <div className="mobile-menu-container">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={1500}
            // offset={-60}
            activeClass="active-link"
            className="cursor mobile-link"
            onClick={() => setActive(false)}
          >
            Projects
          </Link>
          <Link
            to="technologies"
            spy={true}
            smooth={true}
            duration={1500}
            // offset={-60}
            activeClass="active-link"
            className="cursor mobile-link"
            onClick={() => setActive(false)}
          >
            Tech
          </Link>
          <Link
            to="about"
            spy={true} 
            smooth={true}
            duration={1500}
            // offset={-60}
            activeClass="active-link"
            className="cursor mobile-link"
            onClick={() => setActive(false)}
          >
            About Me
          </Link>

          <div className="mobile-menu-social">
            <Socials />
            <p className="mobile-link cursor" onClick={() => setActive(false)}>
              close
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
