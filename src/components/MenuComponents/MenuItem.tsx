import React, { FC } from "react";
import { IRoute } from "./Navigation";
import { SMenuItem, SMenuLink } from "../../styles/scomponent/smenu";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps extends IRoute {
  toggle?: () => void;
}

export const MenuItem: FC<MenuItemProps> = ({
  pathname,
  name,
  color,
  toggle,
}) => {
  return (
    <SMenuItem
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <SMenuLink
        style={{ color: color }}
        href={pathname}
        onClick={toggle}
      >
        {name}
      </SMenuLink>
    </SMenuItem>
  );
};
