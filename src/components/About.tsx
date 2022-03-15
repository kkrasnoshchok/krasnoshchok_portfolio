import React, { FC } from "react";
import { SAbout, SAboutIcon, SAboutTitle } from "../styles/scomponent/sabout";
import { FaReact } from "react-icons/fa";

const About: FC = () => {
  const aboutText = "I AM THE ONE WHO LOVES REACT";

  const textVariants = {
    hidden: {
      opacity: 0,
      translateX: -100,
    },
    visible: {
      opacity: 1,
      translateX: 0,
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: [0, 0.15],
    },
  };

  return (
    <SAbout id="about">
      <div>
        {aboutText.split(" ").map((word, index) => (
          <SAboutTitle
            variants={textVariants}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ amount: 0.1 }}
            transition={{ delay: index * 0.1, type: "spring", bounce: 0.4 }}
            key={index}
          >
            {word}
          </SAboutTitle>
        ))}
      </div>
      <SAboutIcon
        initial={"hidden"}
        variants={iconVariants}
        whileInView={"visible"}
        viewport={{ amount: 0.1 }}
      >
        <FaReact />
      </SAboutIcon>
    </SAbout>
  );
};

export default About;
