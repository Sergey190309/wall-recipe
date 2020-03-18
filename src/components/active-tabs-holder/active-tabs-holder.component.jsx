import React from 'react';

import Aux from "../../hoc/auxiliary/auxiliary";
import ActiveTab from "./acitve-tab/active-tab.component";

const activeTabsHolder = props => {
  return (
    <Aux>
      <h3>ActiveTabsHolder</h3>
      <ActiveTab />
    </Aux>
  );
};

export default activeTabsHolder;
