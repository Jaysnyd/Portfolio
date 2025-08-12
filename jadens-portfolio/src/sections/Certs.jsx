import React from "react";
import { certifications } from "../constants";

const Certs = () => {
  return (
    <div
      id="certs"
      className="h-1/2 px-4 pb-16 mb-10 bg-transparent pt-5 flex flex-col items-center justify-center "
    >
      <h1 className="mb-10 mt-0 pt-0 lg:mt-20 text-1xl sm:text-2xl md:text-4xl font-semibold flex justify-center">
        CERTIFICATIONS
      </h1>
      <div
        id="cert-container"
        className="w-full flex flex-col md:flex-row gap-3 justify-center items-center"
      >
        {certifications.map(({ name, imgPath, classes, certLink }) => (
          <div
            key={name}
            className="w-52 md:w-80 lg:w-[300px] lg:w-1/2 flex justify-center items-center"
          >
            <a href={certLink}>
              <img src={imgPath} alt={name} className={classes} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certs;
