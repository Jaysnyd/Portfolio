import React from "react";
import { animate, easeInOut, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen bg-transparent px-4 py-12 text-black"
    >
      <h1 className="mb-10 mt-0 pt-0 lg:mt-20 text-4xl font-medium flex justify-center">
        PROJECTS
      </h1>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          staggerChildren: 0.1,
        }}
        className="mx-auto max-w-4xl grid grid-cols-12 gap-4"
      >
        <ProjectBlock
          title="SUSH.IO"
          descr="Online pvp game similar to Agar.io but with Sushi!"
          imgPath="/images/sushi-game.png"
          tools="React, TailwindCss, Java, Springboot, etc."
          //   gitHubLink = ""
          //   liveDemo = ""
        />
        <ProjectBlock
          title="SUSH.IO"
          descr="Online pvp game similar to Agar.io but with Sushi!"
          imgPath="/images/sushi-game.png"
          tools="React, TailwindCss, Java, Springboot, etc."
          //   gitHubLink = ""
          //   liveDemo = ""
        />
        <ProjectBlock
          title="SUSH.IO"
          descr="Online pvp game similar to Agar.io but with Sushi!"
          imgPath="/images/sushi-game.png"
          tools="React, TailwindCss, Java, Springboot, etc."
          //   gitHubLink = ""
          //   liveDemo = ""
        />
        <ProjectBlock
          title="SUSH.IO"
          descr="Online pvp game similar to Agar.io but with Sushi!"
          imgPath="/images/sushi-game.png"
          tools="React, TailwindCss, Java, Springboot, etc."
          //   gitHubLink = ""
          //   liveDemo = ""
        />
      </motion.div>
    </div>
  );
};

export default Projects;

const Block = ({ className = "", ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.2 }} // Triggers at 20% VIEW
      className={twMerge(
        "col-span-4 rounded-lg border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-400 p-6",
        className
      )}
      {...rest}
    />
  );
};

// Once we have valid projects to add to our portfolio, wrap the buttons with an anchor tag pointing to the correct live demo and gitHub links which we will pass to the ProjectBlock component as props then destructure them =>
const ProjectBlock = ({ title, descr, imgPath, tools }) => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <div id="projectContainer" className="flex flex-col md:flex-row gap-4">
        <div id="descrContainer" className="w-full md:w-1/2">
          <h1 className="mb-2 text-3xl md:text-4xl font-medium leading-tight">
            {title}
          </h1>
          <p className="text-zinc-400 ">{descr}</p>
          <p className="text-zinc-500 pt-2">
            <strong>Tools:</strong> {tools}
          </p>
          <button
            type="button"
            className="text-white bg-black border-2 rounded-lg py-2 px-4 md:py-3 md:px-6 font-medium w-35 md:w-45 mt-4 cursor-pointer hover:text-black hover:bg-white hover:border-black transition"
          >
            Live Demo
          </button>
          <button
            type="button"
            className="text-white bg-black border-2 rounded-lg py-2 px-4 md:py-3 md:px-6 font-medium w-35 md:w-45 mt-4 cursor-pointer hover:text-black hover:bg-white hover:border-black transition"
          >
            GitHub
          </button>
        </div>

        <div
          id="imgContainer"
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <img
            src={imgPath}
            alt={title}
            className="rounded-lg object-contain w-full max-w-[280px] md:max-w-[320px] lg:max-w-[400px] border border-2 border-white"
          />
        </div>
      </div>
    </Block>
  );
};
