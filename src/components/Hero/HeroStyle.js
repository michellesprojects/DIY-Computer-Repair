import styled from "styled-components";
import { Button } from "react-bootstrap";
export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroPane = styled.div`
  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;

  object-fit: cover;
  background: black;
`;

export const HeroContent = styled.div`
  /* max-width: 2000px; */
  position: absolute;
  padding: 8px 24px;
  display: flex;
  z-index: 2;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: white;
  font-size: 50px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: lightgray;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroBtnContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Btn = styled.div`
  border-radius: 30px;
  background: #83d715;
  white-space: nowrap;

  padding: 14px 38px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;

    color: black;
  }
`;

// export const StyledButton = styled(Button)`
//   color: black;
//   background: #83d715;
//   font-size: 1.4em;
//   margin: 1em;
//   padding: 0.4em 1em;
//   /* border: 2px solid white; */
//   border: none;
//   border-radius: 30px;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: white;

//     color: black;
//   }
// `;
