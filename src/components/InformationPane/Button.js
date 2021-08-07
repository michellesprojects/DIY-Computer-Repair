import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  background: ${(props) => props.colorMain};

  white-space: nowrap;

  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${(props) => props.colorText};

  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border-radius: 30px;

  &:hover {
    transition: all 0.2s ease-in-out;

    color: ${(props) => props.colorTextHover};
    background: ${(props) => props.colorHover};
  }
`;
