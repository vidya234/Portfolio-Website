import React from "react";

import Section from "./section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { backend, frontend } from "../assets";
import {programmingLanguages,webTechnologies,toolsAndServices} from "../constants";
import Heading from "./Heading";

const Skills = () => {
  return (
    <div>
      <Section id= "Skills" crosses className="flex flex-col items-center">
      <div className="flex flex-col items-center">
  <div className="max-w-[25rem] mt-4">
    <h2 className="h2">Skills</h2>
  </div>
  <br></br>

  <div className="flex flex-wrap justify-center mt-4 md:flex-col">
    {/* Programming Languages */}
    <div className="m-4">
      <h3 className="text-2xl font-semibold">Programming Languages</h3>
      <ul className="flex flex-wrap justify-center">
        {programmingLanguages.map((language) => (
          <li key={language.id} className="m-2">
            <img src={language.icon} alt={language.title} width={60} height={40} />
          </li>
        ))}
      </ul>
    </div>
    <br></br>
    {/* Web Technologies */}
    <div className="m-4">
      <h3 className="text-2xl font-semibold">Web Technologies</h3>
      <ul className="flex flex-wrap justify-center">
        {webTechnologies.map((technology) => (
          <li key={technology.id} className="m-2">
            <img src={technology.icon} alt={technology.title} width={60} height={40} />
          </li>
        ))}
      </ul>
    </div>
    <br></br>
    {/* Tools and Services */}
    <div className="m-4">
      <h3 className="text-2xl font-semibold">Tools and Services</h3>
      <ul className="flex flex-wrap justify-center">
        {toolsAndServices.map((tool) => (
          <li key={tool.id} className="m-2">
            <img src={tool.icon} alt={tool.title} width={60} height={40} />
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

      </Section>
    </div>
  );
};

export default Skills;
