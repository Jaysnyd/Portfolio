import React from "react";
import { eduCards, expCards } from "../constants";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import BubbleText from "../components/BubbleText";

const boxVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Experience = () => {
  return (
    <div
      id="exp"
      className="h-1/2 bg-transparent px-4 pb-16 mb-10 mt-20 pt-5 flex flex-col justify-center items-center "
    >
      <BubbleText text="EXPERIENCE" />

      <div id="exp-container" className="w-1/2 flex flex-col gap-6 ">
        {/* Experience Cards  */}
        {expCards.map(({ jobTitle, imgPath, company, jobDates, jobDescr }) => (
          <motion.div
            key={jobTitle}
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col border border-2 border-black p-3 rounded-lg"
          >
            <div className="flex pb-5 gap-5 md:gap-20 lg:gap-40">
              <div className="flex-col w-4/6">
                <h1 className="font-bold mb-1">{jobTitle}</h1>
                <p>{company}</p>
              </div>
              <img src={imgPath} alt="Company-Logo" className="w-16 h-15" />
            </div>

            <p className="mb-4">{jobDates}</p>
            <p>{jobDescr}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
