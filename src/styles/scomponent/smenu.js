import { motion } from "framer-motion";
import styled from "styled-components";
import theme from "../theme";
const { size } = theme;

export const SNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  width: 300px;
`;

export const SBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #222f3e;
`;

export const SButton = styled.button`
  outline: none;
  border: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background: transparent;
`;

export const SMenuList = styled(motion.ul)`
  list-style: none;
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
`;

export const SMenuItem = styled(motion.li)`
  margin-bottom: ${size.m}px;
`;

export const SMenuLink = styled.a`
  text-decoration: none;
  color: #c8d6e5;
  font-size: ${size.m}px;
`;
