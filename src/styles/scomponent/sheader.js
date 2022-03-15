import styled from "styled-components";
import theme from "../theme";
const { size } = theme;

export const SHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SHeaderTitle = styled.a`
  text-decoration: none;
  text-align: center;
  font-size: ${size.s}px;
  letter-spacing: 5px;
  color: rgba(34, 47, 62, 1);
  border-radius: 5px;
`;
