import React, { useState } from "react";
import Media from "../../Media/repair-compressed.mp4";

import {
  HeroContainer,
  HeroPane,
  HeroVideo,
  HeroBtnContainer,
  HeroContent,
  HeroP,
  HeroH1,
  Btn,
  BtnContainer,
} from "./HeroStyle";
const Hero = ({ toggle }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroPane>
        <HeroVideo autoPlay loop src={Media} type="repair/mp4"></HeroVideo>
      </HeroPane>
      <HeroContent>
        <HeroH1>Computer Repair Made Easy</HeroH1>
        <HeroP>
          Sign up today and recieve access to our instructional videos, forums,
          and one-on-one support
        </HeroP>
        <HeroBtnContainer>
          <BtnContainer>
            <Btn to="/login" onClick={toggle}>
              Get Started
            </Btn>
          </BtnContainer>
        </HeroBtnContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
