import React from "react";

// import Aux from "../../hoc/auxiliary/auxiliary";
import TopNavBar from "./top-nav-bar/top-nav-bar.component";
import SideNavBar from "./side-nav-bar/side-nav-bar.component";

import { NavBarContainer, DesktopNavBar, MobileNavBar } from "./nav-bar.styles";

// import classes from './nav-bar.module.css';

const navBar = (props) => {

  return (
    <NavBarContainer>
      <DesktopNavBar >
        <TopNavBar />
      </DesktopNavBar>
      <MobileNavBar >
        <SideNavBar />
      </MobileNavBar>
    </NavBarContainer >
  );
};

export default navBar;
