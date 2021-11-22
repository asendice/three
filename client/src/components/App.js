import React from "react";
import { useState, useEffect } from "react";
import backendApi from "../apis/backendApi";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Tech from "./Tech";
import About from "./About";
import Footer from "./Footer";
const App = () => {
  const [heroText, setHeroText] = useState("");
  const [aboutText, setAboutText] = useState("");

  const getAboutMe = async () => {
    await backendApi
      .get("/aboutme")
      .then((response) => {
        if (response) {
          return response;
        } else {
          const error = new Error(`${error.status}: ${error.statusText}`);
          error.response = response;
          throw error;
        }
      })
      .then((response) => {
        setHeroText(response.data.message[0].heroText);
        setAboutText(response.data.message[0].aboutText);
      });
  };

  useEffect(() => {
    getAboutMe();
  },[])

  return (
    <div className="app">
      <Header />
      <Hero text={heroText} />
      <Projects />
      <Tech />
      <About text={aboutText} />
      <Footer />
    </div>
  );
};

export default App;
