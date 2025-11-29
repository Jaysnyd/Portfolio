import React from "react";
import { animate, easeInOut, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import BubbleText from "../components/BubbleText";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen bg-transparent px-4 py-12 text-black"
    >
      <BubbleText text="PROJECTS" />

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
          title="Professional Portfolio"
          descr="Features my Projects, Skills and Experience."
          imgPath="/images/portfolio-ss.png"
          tools="React, Tailwind, Vite, Framer Motion"
          githubLink="https://github.com/Jaysnyd/Portfolio"
          liveDemo="#hero"
        />
        <ProjectBlock
          title="Email Serverless API"
          descr="Serverless HTTP API for sending emails using AWS services. Integrated with contact form on my portfolio site. Emails sent directly to my inbox. Secured with Google reCAPTCHA v3."
          imgPath="/images/API-Architecture.png"
          tools="AWS Lambda, API Gateway, SES, JavaScript, Node.js"
          githubLink="https://github.com/Jaysnyd/Portfolio"
          liveDemo="#contact"
        />
        <ProjectBlock
          title="Building"
          descr="I am currently working on new projects, more details coming soon!"
          imgPath="/images/working-on.png"
          tools="n/a"
          // githubLink=""
          // liveDemo=""
        />
        <ProjectBlock
          title="Building"
          descr="I am currently working on new projects, more details coming soon!"
          imgPath="/images/working-on.png"
          tools="n/a"
          // githubLink=""
          // liveDemo=""
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
      viewport={{ once: true, amount: 0.2 }} // Triggers at 20% VIEW
      className={twMerge(
        "col-span-4 rounded-lg border-2 border-black bg-transparent hover:bg-black hover:text-white transition-colors duration-400 p-6",
        className
      )}
      {...rest}
    />
  );
};

const ProjectBlock = ({
  title,
  descr,
  imgPath,
  tools,
  githubLink,
  liveDemo,
}) => {
  return (
    <Block className="col-span-12 row-span-4 md:col-span-6">
      {/* Main Container  */}
      <div id="projectContainer" className="flex flex-col md:flex-col gap-3">
        {/* TITLE - DESCRIPTION */}
        <div id="descrContainer" className="w-full ">
          <h1 className="mb-2 text-3xl md:text-4xl font-medium leading-tight">
            {title}
          </h1>
          <p className="text-zinc-400 ">{descr}</p>
          <p className="text-black pt-2">
            <strong>Tools:</strong> {tools}
          </p>
        </div>
        {/* IMAGE CONTAINER */}
        <div
          id="imgContainer"
          className="w-full flex justify-center items-center"
        >
          <img
            src={imgPath}
            alt={title}
            className="rounded-lg object-contain w-full h-52 max-w-[280px] md:max-w-[320px] lg:max-w-[400px]"
          />
        </div>
        {/* BUTTONS CONTAINER  */}
        <div id="button-container" className="w-full flex gap-3 justify-center">
          <a
            href={liveDemo}
            className="text-white bg-black border-2 rounded-lg py-2 px-4 md:py-3 md:px-6 font-medium w-35 md:w-45 mt-4 cursor-pointer hover:text-black hover:bg-white hover:border-black transition justify-center flex items-center"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            className="text-white bg-black border-2 rounded-lg py-2 px-4 md:py-3 md:px-6 font-medium w-35 md:w-45 mt-4 cursor-pointer hover:text-black hover:bg-white hover:border-black transition justify-center flex items-center"
          >
            GitHub
          </a>
        </div>
      </div>
    </Block>
  );
};
