import React from "react";
import { NavLink } from "react-router-dom";


const navItem = props => {
  return (
    <li>
      <NavLink to='/' >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navItem;
