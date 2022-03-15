import { motion } from "framer-motion";
import styled from "styled-components";
import theme from "../theme";
const { size } = theme;

export const SSkills = styled(motion.section)`
  position: relative;
  padding-top: 65px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: rgba(34, 47, 62, 1);
`;

export const SWord = styled(motion.div)`
  font-size: ${size.xl * 2}px;
`;

export const SIcon = styled(motion.div)`
  font-size: 450px;
  position: absolute;
  opacity: 0.15;
  top: 70%;
  left: 30%;
  transform: translate(-50%, -50%);
`;
