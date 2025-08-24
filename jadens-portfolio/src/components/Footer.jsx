import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-6 bg-black text-gray-400 text-s flex flex-col items-center justify-center">
      <p className="text-white pb-2">Created by: Jaden Snyder</p>
      <p>
        <span className="underline">Tools Used:</span> React.js, Vite,
        TailwindCSS, Framer Motion, AWS SES, AWS Lambda, AWS API Gateway, and
        Postman.
      </p>

      <p className="pt-6 ">
        Please feel free to reach out via Email Contact form, LinkedIn, Phone
        number, or Email directly to jaysnyderrr@gmail.com
      </p>
    </footer>
  );
};

export default Footer;
