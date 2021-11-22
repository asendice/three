import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials-container">
      <a
        href="https://github.com/asendice"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub className="socials" />
      </a>
      <a
        href="https://www.linkedin.com/in/dylan-travis-2716a4205/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin className="socials" />
      </a>
      <a
        href="https://dtravmysite.s3.us-west-1.amazonaws.com/Dylan_Travis_-_Web_Developer.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaFilePdf className="socials" />
      </a>
    </div>
  );
};

export default Socials;
