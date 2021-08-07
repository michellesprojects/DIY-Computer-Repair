import React from "react";
import {
  LoginContainer,
  LoginBody,
  Logo,
  FormContainer,
  Form,
  H1,
  Title,
  FormButton,
  P,
  Input,
  H2,
} from "./LoginStyle";

const L = () => {
  return (
    <>
      <LoginContainer>
        <LoginBody>
          <Logo to="/">DIY Repair</Logo>

          <FormContainer>
            <Form>
              <H1>Sign In</H1>

              <Title htmlFor="for">Email</Title>
              <Input type="email"></Input>
              <Title htmlFor="for">Password</Title>
              <Input type="password"></Input>

              <FormButton>
                <H2>Submit</H2>
              </FormButton>
              <P>Forgot Password</P>
              <P>Sign Up</P>
            </Form>
          </FormContainer>
        </LoginBody>
      </LoginContainer>
    </>
  );
};

export default L;
