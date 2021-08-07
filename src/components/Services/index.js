import React from "react";
import support from "../../images/headphones.svg";
import chat from "../../images/chat.png";
import serv3 from "../../images/repair.svg";

import {
  ServicesContainer,
  H1,
  BodyContainer,
  Card,
  Icon,
  H2,
  P,
} from "./ServiceStyle";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <H1>Our Services</H1>

      <BodyContainer>
        <Card>
          <Icon src={chat}></Icon>
          <H2>Q&amp;A Forums</H2>
          <P> Browse and participate in our community forums</P>
        </Card>
        <Card>
          <Icon src={support}></Icon>
          <H2>Live Support</H2>
          <P> Get live support with a remote repair session</P>
        </Card>
        <Card>
          <Icon src={serv3}></Icon>
          <H2>Guided Tutorials</H2>
          <P>Use our tutorials to diagnose, build, and repair your device </P>
        </Card>
      </BodyContainer>
    </ServicesContainer>
  );
};
export default Services;
