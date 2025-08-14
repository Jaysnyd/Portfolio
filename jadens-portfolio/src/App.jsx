import React from "react";
import Hero from "./sections/Hero";
import NavBar from "./components/NavBar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certs from "./sections/Certs";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <>
      <div className="bg-styles">
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <Certs />
        <Experience />
      </div>
    </>
  );
};

export default App;
