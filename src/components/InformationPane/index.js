import React from "react";
import { Button } from "./Button";
// import pic1 from "../../images/sec3.svg";
// import pic2 from "../../images/sec2.svg";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Col1,
  TextWrapper,
  Heading,
  Title,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
  Col2,
} from "./infostyle";

const InfoPane = ({
  TitleColor,
  imga,
  id,
  btnColorText,
  headLine,
  topLine,
  description,
  subColor,
  headerColor,
  backgroundColor,
  btnColorMain,
  btnColorHover,
  colorTextHover,
  gridPos,
  buttonLabel,
  alt,
}) => {
  return (
    <>
      <InfoContainer id={id} color={backgroundColor}>
        <InfoWrapper>
          <InfoRow pos={gridPos}>
            <Col1>
              <TextWrapper>
                <Heading color={headerColor}> {topLine}</Heading>
                <Title color={TitleColor}> {headLine}</Title>
                <Subtitle color={subColor}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    colorText={btnColorText}
                    colorMain={btnColorMain}
                    colorHover={btnColorHover}
                    colorTextHover={colorTextHover}
                    to="home"
                    smooth={true}
                    duration={650}
                    spy={true}
                    exact="true"
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Col1>
            <Col2>
              <ImgWrap>
                <Img src={imga} alt={alt}></Img>
              </ImgWrap>
            </Col2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoPane;
