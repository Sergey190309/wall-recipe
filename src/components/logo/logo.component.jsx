import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import { LogoContainer, LogoImg } from './logo.styles'

const logo = (props) => (
  <LogoContainer>
    <LogoImg src={burgerLogo} alt="It should be logo here" />
  </LogoContainer>
);

export default logo;
