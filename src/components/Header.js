import React from "react";
import Socials from "./Socials";
import { DiCode } from "react-icons/di";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-name">
        {/* <DiCode className="logo"/> */}
        <h5>Dylan Travis</h5>
      </div>

      <div className="header-navigation">
        <a>Projects</a>
        <a>Technologies</a>
        <a>About</a>
      </div>
      <Socials />
    </div>
  );
};

export default Header;
