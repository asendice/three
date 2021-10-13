import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import About from "./components/About";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Projects />
      <Tech />
      <About />
    </div>
  );
};

export default App;
