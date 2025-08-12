// Stores JS Constants - Export to import into components

const navLinks = [
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Certifications",
    link: "#certs",
  },
  {
    name: "Experience",
    link: "#experience",
  },
];

const certifications = [
  {
    name: "CompTIA IT Fundamentals+",
    imgPath: "/images/itFundPlus.png",
    classes: "mb-2 md:mb-10 w-42 md:w-80 lg:w-[300px] object-contain",
    certLink: "#",
  },
  {
    name: "CompTIA Network+",
    imgPath: "/images/networkPlus.png",
    classes: "mb-0 md:mb-13 w-32 md:w-60 lg:w-[225px] object-contain",
    certLink: "#",
  },
];
export { navLinks, certifications };
