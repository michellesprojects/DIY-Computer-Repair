import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InformationPane from "../components/InformationPane";

import {
  SecOne,
  SecTwo,
  SecThree,
  SecFour,
} from "../components/InformationPane/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar toggle={toggle} />
      <Hero toggle={toggle}></Hero>

      <InformationPane {...SecOne}></InformationPane>
      <InformationPane {...SecTwo}></InformationPane>
      <InformationPane {...SecThree}></InformationPane>
      <Services></Services>
      <InformationPane {...SecFour}></InformationPane>
      <Footer></Footer>
    </>
  );
};

export default Home;
