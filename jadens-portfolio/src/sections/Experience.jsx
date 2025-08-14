import React from "react";
import { eduCards, expCards } from "../constants";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import BubbleText from "../components/BubbleText";

const Experience = () => {
  return (
    <div
      id="exp"
      className="h-1/2 bg-transparent px-4 pb-16 mb-10 mt-20 pt-5 flex flex-col justify-center items-center "
    >
      <BubbleText text="EXPERIENCE" />

      <div id="exp-container" className="w-1/2 flex flex-col gap-6 ">
        {/* Experience Cards  */}
        {expCards.map(({ jobTitle, jobDates, jobDescr }) => (
          <div
            key={jobTitle}
            className="flex flex-col border border-2 border-black p-3 rounded-lg"
          >
            <h1 className="font-bold mb-1">{jobTitle}</h1>
            <p className="mb-4">{jobDates}</p>
            <p>{jobDescr}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
