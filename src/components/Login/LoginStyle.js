import styled from "styled-components";

import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  background: #83d715;
  height: 100vh;
`;

export const LoginBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 420px) {
    height: 80%;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 34px;
  text-align: center;
  margin-top: 28px;
  margin-bottom: -24px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: black;
  max-width: 400px;
  height: auto;
  width: 100%;
  display: grid;
  margin: 0 auto;

  padding: 68px 34px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const H1 = styled.h1`
  margin-bottom: 40px;
  color: white;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;

export const Title = styled.label`
  margin-bottom: 12px;
  font-size: 14px;
  color: white;
`;

export const Input = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #83d715;
  padding: 16px 0;
  border: black;
  border-radius: 30px;
  color: white;
  font-size: 24px;
  cursor: pointer;

  /* &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
  } */
`;

export const H2 = styled.h2`
  color: white;
  text-align: center;

  font-size: 18px;

  &:hover {
    color: black;
  }
`;
export const P = styled.span`
  text-align: center;
  margin-top: 24px;
  margin-bottom: -10px;
  color: white;
  font-size: 14px;

  &:hover {
    color: #83d715;
  }
`;
