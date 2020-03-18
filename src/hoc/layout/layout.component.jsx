import React from "react";

import Aux from "../auxiliary/auxiliary";
import Navigations from "../../components/navigations/navigations.component";
import SubNavivation from "../../components/sub-navigation/sub-navigation.component";

const Layout = (props) => {
  return (
    <Aux>
      <Navigations />
      <SubNavivation />
      <main>
        {props.children}
      </main>
    </Aux>
  );
};

export default Layout;
