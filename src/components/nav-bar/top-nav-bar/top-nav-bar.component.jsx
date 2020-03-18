import React from "react";

// import Aux from "../../../hoc/auxiliary/auxiliary";
import NavItem from "../nav-item/nav-item.component";
import Logo from '../../logo/logo.component';

import { TopNavBarConainer } from './top-nav-bar.styles';
// import classes from "./top-nav-bar.module.css";

const topNavBar = (props) => {
  return (
    <TopNavBarConainer>
      <ul>
        <Logo height='100%' />
        <NavItem>NavItem from TopNavBar No1</NavItem>
        <NavItem>NavItem from TopNavBar No1</NavItem>
      </ul>
    </TopNavBarConainer>
  );
};

export default topNavBar;
