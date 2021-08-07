import React from "react";

import { Container, Link, Body, Column, Row, H1 } from "./FooterStyle";
const Footer = () => {
  return (
    <Container id="footer">
      {
        <Body>
          <Row>
            <Column>
              <H1>About Us</H1>

              <Link href="#">Aim</Link>
              <Link href="#">Vision</Link>
              <Link href="#">Testimonials</Link>
              <Link href="#">Terms of Service</Link>
            </Column>

            <Column>
              <H1>Opportunities</H1>
              <Link href="#">Writing</Link>
              <Link href="#">Learning</Link>
              <Link href="#">Teaching</Link>

              <Link href="#">Internships</Link>
            </Column>

            <Column>
              <H1>Contact Us</H1>
              <Link href="#">Email</Link>
              <Link href="#">Twitter</Link>

              <Link href="#">LinkedIn</Link>
              <Link href="#">Facebook</Link>
            </Column>
          </Row>
        </Body>
      }
    </Container>
  );
};

export default Footer;
