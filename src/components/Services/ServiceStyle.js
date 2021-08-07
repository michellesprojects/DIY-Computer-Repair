import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 880px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #04041f;
  align-items: center;
  overflow: hidden;
  width: auto;
  @media screen and (max-width: 1000px) {
    height: 1130px;
  }
  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const BodyContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 14px;
  padding: 0 48px;

  @media screen and (max-width: 1000px) {
    width: auto;
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2 ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const H1 = styled.h1`
  font-size: 2.4rem;
  color: white;
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const P = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const H2 = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
`;
