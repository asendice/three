import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contact">
        <div className="footer-content">
          <p className="footer-text">Call</p>
          <p className="footer-juice">775-203-4364</p>
        </div>
        <div className="footer-content" style={{ marginLeft: "40px" }}>
          <p className="footer-text">Email</p>
          <p className="footer-juice">dylantravisdev@gmail.com</p>
        </div>
      </div>
      <div className="footer-socials">
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
