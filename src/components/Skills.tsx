import React, { FC } from "react";
import { SIcon, SSkills, SWord } from "../styles/scomponent/sskills";
import { MdOutlineMilitaryTech } from "react-icons/md";

const Skills: FC = () => {
  const skillsSentence = "AND WHAT CAN I DO ?";

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
      transform: "translate(-100, -50%)",
    },
    visible: { transform: "translate(-50%, -50%)" },
  };

  return (
    <SSkills id="skills">
      <>
        {skillsSentence.split(" ").map((word, index) => (
          <SWord
            variants={textVariants}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ amount: 0.1 }}
            transition={{ delay: index * 0.1, type: "spring", bounce: 0.4 }}
            key={index}
          >
            {word}
          </SWord>
        ))}
      </>
      <SIcon
        initial={"hidden"}
        variants={iconVariants}
        whileInView={"visible"}
        viewport={{ amount: 0.1 }}
        transition={{ duration: .5, bounce: 0.2 }}
      >
        <MdOutlineMilitaryTech />
      </SIcon>
    </SSkills>
  );
};

export default Skills;
