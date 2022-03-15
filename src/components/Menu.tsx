import React, { Dispatch, FC, SetStateAction } from "react";
import { useRef } from "react";
import { useDimensions } from "../hooks/dimensions";
import { Navigation } from "./MenuComponents/Navigation";
import { MenuToggle } from "./MenuComponents/MenuToggle";
import { SBackground, SNav } from "../styles/scomponent/smenu";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 10,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(60px at 0px 0px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

interface MenuProps {
  isMenuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu: FC<MenuProps> = ({ isMenuOpen, setMenuOpen }) => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <SNav
      initial={false}
      animate={isMenuOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <SBackground variants={sidebar} />
      <Navigation isOpen={isMenuOpen} toggle={() => setMenuOpen(!isMenuOpen)} />
      <MenuToggle toggle={() => setMenuOpen(!isMenuOpen)} />
    </SNav>
  );
};

export default Menu;
