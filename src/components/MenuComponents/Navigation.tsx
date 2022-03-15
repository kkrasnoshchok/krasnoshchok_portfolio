import React, { FC } from "react";
import { MenuItem } from "./MenuItem";
import { SMenuList } from "../../styles/scomponent/smenu";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface NavigationProps {
  isOpen: boolean;
  toggle : () => void;
}

export interface IRoute {
  pathname: string;
  name?: string;
  color: string;
}

const RoutesList: IRoute[] = [
  { pathname: "#about", name: "who am i", color: "rgba(16, 172, 132,1.0)" },
  {
    pathname: "#experience",
    name: "experience",
    color: "rgba(255, 159, 67,1.0)",
  },
  {
    pathname: "#what",
    name: "what can i do",
    color: "rgba(255, 107, 107,1.0)",
  },
  { pathname: "#contacts", name: "contacts", color: "rgba(46, 134, 222,1.0)" },
];

export const Navigation: FC<NavigationProps> = ({ isOpen, toggle }) => (
  <SMenuList
    variants={variants}
    style={{
      pointerEvents: !isOpen ? "none" : "all",
      visibility: !isOpen ? "hidden" : "visible",
      opacity: !isOpen ? 0 : 1,
    }}
  >
    {RoutesList.map((route) => (
      <MenuItem
        pathname={route.pathname}
        name={route.name}
        color={route.color}
        toggle={toggle}
      />
    ))}
  </SMenuList>
);
