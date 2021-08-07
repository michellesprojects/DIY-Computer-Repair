import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link } from "react-scroll";
export const Nav = styled.nav`
  /* background: #04041f; */
  background: ${({ navScroll }) => (navScroll ? "black" : "transparent")};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  position: fixed;
  z-index: 100;
  width: 100%;

  @media screen and (max-width: 960px) {
    transition: 0.6s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 25px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 25px;
  font-weight: bold;
  text-decoration: none;
`;

/*Responsive hamburger menu icon*/
export const Icon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  margin-right: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid white;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 30px;
  background: white;
  white-space: nowrap;
  padding: 10px 20px;
  color: black;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #83d715;
    color: white;
  }
`;
