import React from "react";

// import Aux from "../../../hoc/auxiliary/auxiliary";
import NavItem from "../nav-item/nav-item.component";
import classes from "./side-nav-bar.module.css";

const sideNavBar = (props) => {
  return (
    <div className={classes.SideNavBar}>
      <NavItem>NavItem from SideNavBar No1</NavItem>
      <NavItem>NavItem from SideNavBar No2</NavItem>
    </div>
  );
};

export default sideNavBar;
