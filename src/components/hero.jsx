import React, { useState, useEffect } from "react";
import Section from "./section";

import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { resume } from "../assets";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = `Hii ! I am Srividya Pentapati`;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < textToType.length) {
        setTypedText((prevText) => prevText + textToType.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="About"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            <span id="typing-text" className="text-3xl font-bold">
              {typedText}
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            I am an undergraduate student pursuing Geophysical Technology at IIT
            Roorkee. My passion lies in full-stack development, design, and
            problem-solving. I am always eager to learn new technologies and
            approaches to enhance my skills and create innovative solutions.
          </p>
          <Button href={resume} download="my-resume" white>
            Download Resume
          </Button>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] md:w-[50%] lg:w-[50%]">
        <BackgroundCircles />
      </div>
    </Section>
  );
};

export default Hero;
