import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./Navbar.elements";
function Navbar(props) {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo></NavLogo>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
