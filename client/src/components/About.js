import React from "react";
import Timeline from "./Timeline";

const About = ({text}) => {
  return (
    <div id="about" className="section-container">
      <div className="section-header">
        <h1 className="section-title">About Me</h1>
      </div>
      <div className="about-container">
        <p className="hero-text" style={{marginTop: "-20px"}}>
         {text}
        </p>
        <Timeline />
        <div className="about-achievement">
          <p className="section-title" style={{ fontSize: "1.4rem" }}>
            Personal Achievements
          </p>
          <div className="achievement-container">
            <a
              href="https://dtravmysite.s3.us-west-1.amazonaws.com/certificates/Bootstrap_Certificate_Dylan.pdf"
              rel="noopener noreferrer"
              target="_blank"
              style={{textDecoration: "none"}}
            >
              <div className="achievement">
                <p className="nucamp">nucamp</p>
                <p>Front-End Web Development: Bootstrap</p>
                <p style={{ alignSelf: "flex-end" }}>2020</p>
              </div>
            </a>
            <a
              href="https://dtravmysite.s3.us-west-1.amazonaws.com/certificates/React_Certificate_Dylan.pdf"
              rel="noopener noreferrer"
              target="_blank"
              style={{textDecoration: "none"}}
            >
              <div className="achievement">
                <p className="nucamp">nucamp</p>
                <p>Front-End Web Development: React</p>
                <p style={{ alignSelf: "flex-end" }}>2020</p>
              </div>
            </a>
            <a
              href="https://dtravmysite.s3.us-west-1.amazonaws.com/certificates/Front_End_Certificate_Dylan.pdf"
              rel="noopener noreferrer"
              target="_blank"
              style={{textDecoration: "none"}}
            >
              <div className="achievement">
                <p className="nucamp">nucamp</p>
                <p>Front-End Web and Mobile Development Bootcamp</p>
                <p style={{ alignSelf: "flex-end" }}>2020</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
