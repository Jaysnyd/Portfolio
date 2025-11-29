import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mb-20 md:mb-0 relative overflow-hidden flex justify-center items-center"
    >
      {/* Layout  */}
      <div className="hero-layout">
        {/* Left Content  */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-8 w-full md:px-20 px-5">
          <div className="flex flex-col gap-1 ">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold">
              Jaden Snyder
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 pt-1">
              Undergraduate Software Engineering Student,<br />Current IT Technician with 4+ Years Experience <br /> <br />Transitioning into Software Engineering by building real projects, sharpening my skills, and pursuing new opportunities.<br /><br />Based in Ohio, US
            </p>
            <a href="#projects">
              <button
                type="button"
                className="text-white bg-black border-2 rounded-lg p-3 font-medium w-35 md:w-45 mt-4 cursor-pointer hover:text-black hover:bg-white hover:border-black"
              >
                See My Work
              </button>
            </a>
          </div>
          <img
            src="/images/me-cropped.png"
            alt="Photo of me"
            className="mt-10 w-52 md:w-80 lg:w-[400px] object-contain"

          />
        </header>

        <div className="down-arrow"><img src="images/arrow.svg" alt="down-arrow" /></div>
      </div>
    </section>
  );
};

export default Hero;
