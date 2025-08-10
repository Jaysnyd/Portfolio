import React from "react";
import Hero from "./sections/Hero";
import NavBar from "./components/NavBar";
import Projects from "./sections/Projects";
import BG from "./components/BG";

const App = () => {
  return (
    <>
      {/* <BG /> */}
      <NavBar />
      <Hero />
      <Projects />
    </>
  );
};

export default App;
