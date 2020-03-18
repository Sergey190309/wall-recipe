import React from "react";

import Aux from "../auxiliary/auxiliary";
import NavBar from "../../components/nav-bar/nav-bar.component";
import SubNavivation from "../../components/sub-navigation/sub-navigation.component";

const Layout = (props) => {
  return (
    <Aux>
      <NavBar />
      <SubNavivation />
      <main>
        {props.children}
      </main>
    </Aux>
  );
};

export default Layout;
