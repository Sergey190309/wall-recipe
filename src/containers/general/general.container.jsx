import React from "react";

import Aux from "../../hoc/auxiliary/auxiliary";
import MainPanel from "../../components/main-panel/main-panel.component";
import ActiveTabsHolder from "../../components/active-tabs-holder/active-tabs-holder.component";

// It contains information about general application status.
// Language, user, active filters, filters possible valies.
class General extends React.Component {
  componentDidMount() {

  };
  render() {


    return (
      <Aux>
        <h2>That's General container!</h2>
        <MainPanel />
        <ActiveTabsHolder />
      </Aux>
    );
  };
};

export default General;
