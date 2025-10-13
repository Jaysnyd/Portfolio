import React from "react";
import { certifications } from "../constants";
import BubbleText from "../components/BubbleText";

const Certs = () => {
  return (
    <div
      id="certs"
      className="h-1/2 px-4 pb-16 mb-10 bg-transparent pt-5 flex flex-col items-center justify-center "
    >
      <BubbleText text="CERTIFICATIONS" />

      <div
        id="cert-container"
        className="w-1/2 pb-8 md:pb-2 flex flex-col md:flex-row gap-3 justify-center items-center bg-white border border-black border-2 rounded-lg"
      >
        {certifications.map(({ name, imgPath, classes, pdfLink }) => (
          <div
            key={name}
            className="p-3 md:p-3 w-52 md:w-80 lg:w-[300px] lg:w-1/2 flex justify-center items-center"
          >
            <a href={pdfLink} target="_blank">
              <img src={imgPath} alt={name} className={classes} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certs;
