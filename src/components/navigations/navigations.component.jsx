import React from "react";

import Aux from "../../hoc/auxiliary/auxiliary";
import NavigationItem from "./navigation-item/navigation-item.component";

const navigations = (props) => {
  return (
    <Aux>
      <h2>Hi, I'm Navigations</h2>
      <NavigationItem />
    </Aux>
  );
};

export default navigations;
