import { navLinks } from "../constants/index.js";
import { useState, useEffect } from "react";
// import resumePdf from "./Resume_JadenSnyder.pdf";

const NavBar = () => {
  // Define state, track if user has scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Event listener for when user scrolls
    const handleScroll = () => {
      // check if user has scrolled 10px
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // Add event listener to window
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    //                      If scrolled apply scrolled class else..
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="mx-auto flex items-center justify-between">
        {/* Logo / Beginning of page  */}
        <a
          href="#hero"
          className="text-black-50 text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105"
        >
          Jaden Snyder
        </a>

        {/* Middle of NavBar  */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
            <li className="group">
              <a href="/Resume-JadenSnyder.pdf" target="_blank">
                <span>Resume </span>
                <span className="underline "></span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Button  */}
        <a href="#contact" className="contact-btn group">
          <div className="inner">Contact Me</div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
