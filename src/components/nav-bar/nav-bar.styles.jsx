import styled from "styled-components";

export const NavBarContainer = styled.div`
  height: 7%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e6a466;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`

export const MobileNavBar = styled.div`
@media (min-width: 500px) {
    display: none;
  }
`
export const DesktopNavBar = styled.div`
@media (max-width: 499px) {
    display: none;
  }
`
