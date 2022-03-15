import { motion } from "framer-motion";
import styled from "styled-components";
import theme from "../theme";
const { size } = theme;

export const SContacts = styled(motion.section)`
  position: relative;
  height: 100vh;
  overflow-x: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SContactsFormContainer = styled(motion.div)`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; */
`;
export const SContactsForm = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

export const SContactsTitle = styled(motion.h1)`
  margin-bottom: 16px;
  font-size: ${size.xl}px;
  font-family: "Sf_Pro";
`;

export const SContactsInput = styled(motion.input)`
  padding: 8px 20px;
  margin-bottom: ${size.s}px;
  outline: none;
  font-family: "Sf_Pro";
  font-size: ${size.s + 5}px;
  border-radius: 5px;
  background: rgba(200, 214, 229, 1);
  border: 0.5px solid rgba(34, 47, 62, 1);
  transition: all 0.15s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const SContactsTextArea = styled(motion.textarea)`
  font-family: "Sf_Pro";
  resize: none;
  outline: none;
  padding: 8px;
  height: 200px;
  font-size: ${size.s}px;
  border-radius: 5px;
  background: rgba(200, 214, 229, 1);
  margin-bottom: ${size.m}px;

  &:focus {
    box-shadow: 0px 0px 5px rgba(34, 47, 62, 1);
  }
`;

export const SContactsFormButton = styled(motion.button)`
  display: block;
  background-color: rgba(34, 47, 62, 1);
  border: none;
  padding: 12px 10px;
  font-size: ${size.m}px;
  color: rgba(200, 214, 229, 1);
  border-radius: 10px;

  &::disabled {
    background-color: rgba(127, 140, 141, 1);
  }
`;

export const SContactsSection = styled(motion.div)`
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export const SContactsItem = styled(motion.a)`
  flex: 1;
  padding: 15px 0;
  border-radius: 5px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${size.l}px;
`;
