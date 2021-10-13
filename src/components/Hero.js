import React from "react";
import RightSideAnimation from "./RightSideAnimation";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1 className="hero-title">Welcome To My Personal Portfolio</h1>
        <p className="hero-text">
          Generate some really good random text. This needs to look like a
          paragraph of random really cool and interested text. Maybe this text
          is the end all be all of web development. Who knows? As long as it
          looks as it should.
        </p>
        <div className="hero-button">Learn More</div>
      </div>
      <div className="hero-right">
        <RightSideAnimation />
      </div>
    </div>
  );
};

export default Hero;
