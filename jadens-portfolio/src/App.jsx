import React from "react";
import Hero from "./sections/Hero";
import NavBar from "./components/NavBar";
import Projects from "./sections/Projects";
import BG from "./components/BG";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <>
      {/* <BG /> */}
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
    </>
  );
};

export default App;
