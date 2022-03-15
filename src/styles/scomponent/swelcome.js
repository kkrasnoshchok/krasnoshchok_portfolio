import { motion } from "framer-motion";
import styled from "styled-components";
import theme from "../theme";
const { size } = theme;

export const SWelcome = styled(motion.section)`
  height: 100vh;
  overflow-x: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SWelcomeItem = styled(motion.div)`
  font-family: "Sf_Pro", sans-serif;
  font-size: ${size.xl}px;
  color: rgba(34, 47, 62, 1);
`;
