import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  padding: 78px 0;
  padding-left: 150px;
  background: #04041f;
  bottom: 0;
  width: auto;

  @media (max-width: 1000px) {
    padding-left: 0;
    padding: auto;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  margin-left: 54px;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  display: grid;
  margin-left: 40px;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const H1 = styled.h1`
  font-size: 26px;
  color: white;
  margin-bottom: 34px;
  font-weight: bold;

  @media (max-width: 574px) {
    font-size: 24px;
  }
`;

export const Link = styled(RouterLink)`
  color: white;
  margin-bottom: 24px;
  font-size: 18px;
  text-decoration: none;
  @media (max-width: 574px) {
    font-size: 16px;
  }

  &:hover {
    color: #83d715;
  }
`;
