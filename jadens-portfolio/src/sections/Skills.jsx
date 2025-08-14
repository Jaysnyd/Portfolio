import React from "react";
import BubbleText from "../components/BubbleText";

const Skills = () => {
  return (
    <div
      id="skills"
      className="h-1/2 bg-transparent px-4 pb-16 pt-5 flex flex-col justify-center items-center"
    >
      {/* <h1 className="mb-10 mt-0 pt-0 lg:mt-20 text-1xl sm:text-2xl md:text-4xl font-semibold flex justify-center">
        SKILLS
      </h1> */}

      <BubbleText text="SKILLS" />

      <div
        id="skillsTable"
        className="container-bg flex align-center justify-center rounded-lg pt-4 pb-4 w-full md:w-full lg:w-2/5 text-white "
      >
        <table>
          <tbody>
            <tr>
              <td className="pl-3 pr-3 py-4">
                <strong>Development Tools</strong>
              </td>
              <td className="pr-3 py-4">
                <a href="https://skillicons.dev">
                  <img
                    src="https://skillicons.dev/icons?i=vscode,idea,git,github,aws,docker,figma,postman"
                    alt="Development Tools"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td className="pl-3 pr-3 py-4">
                <strong>Front-End</strong>
              </td>
              <td className="pr-3 py-4">
                <a href="https://skillicons.dev">
                  <img
                    src="https://skillicons.dev/icons?i=react,js,html,css,tailwind,bootstrap,vite"
                    alt="Development Tools"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td className="pl-3 pr-3 py-4">
                <strong>Back-End</strong>
              </td>
              <td className="pr-3 py-4">
                <a href="https://skillicons.dev">
                  <img
                    src="https://skillicons.dev/icons?i=java,spring,nodejs,maven,python"
                    alt="Development Tools"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td className="pl-3 pr-3 py-4">
                <strong>Database</strong>
              </td>
              <td className="pr-3 py-4">
                <a href="https://skillicons.dev">
                  <img
                    src="https://skillicons.dev/icons?i=postgres,mysql,sqlite"
                    alt="Development Tools"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skills;
