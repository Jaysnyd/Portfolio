import React from "react";

const BubbleText = ({ text }) => {
  return (
    <h2 className="mb-10 mt-0 lg:mt-20 pt-0 text-center text-5xl font-thin text-black">
      {text.split("").map((child, idx) => (
        <span className="hoverText" key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;

// CERTS - mb-10 mt-0 pt-0 lg:mt-20 text-1xl sm:text-2xl md:text-4xl font-semibold flex justify-center
// PROJECTS - mb-10 mt-0 pt-0 lg:mt-20 text-1xl sm:text-2xl md:text-4xl font-semibold flex justify-center
// SKILLS - mb-10 mt-0 pt-0 lg:mt-20 text-1xl sm:text-2xl md:text-4xl font-semibold flex justify-center
