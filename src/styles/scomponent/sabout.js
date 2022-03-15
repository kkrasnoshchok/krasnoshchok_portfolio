import { motion } from "framer-motion";
import styled from "styled-components";
import theme from "../theme";
const { size } = theme;

export const SAbout = styled(motion.section)`
  position: relative;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  color: rgba(34, 47, 62, 1);
`;
export const SAboutTitle = styled(motion.h1)`
  font-size: ${size.xl * 2}px;
`;
export const SAboutIcon = styled(motion.div)`
  opacity: 0.15;
  font-size: 700px;
  position: absolute;
  top: 70%;
  left: 50%;
`;
