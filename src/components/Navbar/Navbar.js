import React, { useState } from "react";
import { MobileIcon, Nav, NavbarContainer, NavLogo } from "./Navbar.elements";

import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/logo.svg";
function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={logo} alt="logo" height="50px" />
          <h1> ShowCase</h1>
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {clicked ? <FaTimes /> : <FaBars />}
        </MobileIcon>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
