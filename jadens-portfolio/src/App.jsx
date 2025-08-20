import React from "react";
import Hero from "./sections/Hero";
import NavBar from "./components/NavBar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certs from "./sections/Certs";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

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
        <Contact />
      </div>
    </>
  );
};

export default App;
