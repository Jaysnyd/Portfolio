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
    link: "#exp",
  },
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    imgPath: "/images/aws-ccp.png",
    classes: "mb-2 md:mb-2 w-42 md:w-80 lg:w-[300px] object-contain",
    pdfLink: "/AWS-CCP-Certificate.pdf",
  },
  {
    name: "CompTIA Project+",
    imgPath: "/images/ProjectPlus.png",
    classes: "mb-2 md:mb-2 w-42 md:w-80 lg:w-[300px] object-contain",
    pdfLink: "/CompTIA-ProjectPlus-Cert.pdf",
  },
  {
    name: "CompTIA IT Fundamentals+",
    imgPath: "/images/itf-cert.png",
    classes: "mb-2 md:mb-2 w-42 md:w-80 lg:w-[300px] object-contain",
    pdfLink: "#",
  },
  {
    name: "CompTIA Network+",
    imgPath: "/images/netplus-cert.png",
    classes: "mb-2 md:mb-2 w-42 md:w-80 lg:w-[300px] object-contain",
    pdfLink: "#",
  },
];

const expCards = [
  {
    jobTitle: "IT Technician",
    company: "Encore Technologies | Cincinnati Childrens Hospital",
    imgPath: "/images/CCHMC.png",
    jobDates: "December 2023 - Present",
    jobDescr:
      "Replaced legacy devices with upgraded hardware, transferring user profiles, domain policies and local files. Provided on-site technical support for Hospital staff, resolving software and access issues across multiple departments.",
  },
  {
    jobTitle: "Helpdesk Support Technician",
    company: "Kroger Technologies",
    imgPath: "/images/KrogerTechLogo.png",
    jobDates: "July 2022 - August 2023",
    jobDescr:
      "Delivered remote technical support to Kroger store employees using self-checkout systems, scanners, and other POS technologies. Diagnosed software, hardware, and peripheral issues. Explained solutions clearly to non-technical users.",
  },
  {
    jobTitle: "Support Technician",
    company: "Advanced Service Technologies",
    imgPath: "/images/AST.png",
    jobDates: "June 2021 - June 2022",
    jobDescr:
      "Supported field technicians with the installations of patient monitoring systems within various hospitals. Walked technicians through real-time troubleshooting, increasing deployment speed and reducing escalations.",
  },
];

const eduCards = [
  {
    degree: "B.S. Software Engineering",
    school: "Western Governors University",
    gradDate: "June 2026",
  },
  {
    degree: "A.S. Computer Science / Network Engineering",
    school: "Sinclair Community College",
    gradDate: "June 2024",
  },
];
export { navLinks, certifications, expCards, eduCards };
