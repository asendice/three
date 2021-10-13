import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials-container">
      <FaGithub className="socials" />
      <FaLinkedin className="socials" />
      <FaFilePdf className="socials" />
    </div>
  );
};

export default Socials;
