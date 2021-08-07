import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa"; /*using react icon for hamburger icon*/
import { animateScroll as Scroll } from "react-scroll";

import {
  NavBarContainer,
  Nav,
  NavLogo,
  Icon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarStyle";

const Navbar = ({ toggle }) => {
  const [navScroll, setNavScroll] = useState(false);

  const move = () => {
    if (window.scrollY >= 80) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", move);
  });

  const toggleHome = () => {
    Scroll.scrollToTop();
  };
  return (
    <>
      <Nav navScroll={navScroll}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            DIY Repair
          </NavLogo>

          <Icon onClick={toggle}>
            <FaBars />
          </Icon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                onClick={toggle}
                offset={-50}
                smooth={true}
                duration={400}
                spy={true}
                exact="true"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                onClick={toggle}
                smooth={true}
                offset={-50}
                duration={400}
                spy={true}
                exact="true"
              >
                Services
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="sign"
                onClick={toggle}
                smooth={true}
                offset={-50}
                duration={400}
                spy={true}
                exact="true"
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login" onClick={toggle}>
              Sign In
            </NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
