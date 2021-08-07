import styled from "styled-components";

export const InfoContainer = styled.div`
  color: black;
  background: ${(props) => props.color};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  margin-right: 0px;
  margin-left: auto;
  padding: 0 25px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;

  grid-template-areas: ${(props) => props.pos};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ pos }) =>
      pos === "second" ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Col1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Col2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  padding-right: 10px;
`;

export const Heading = styled.p`
  color: #002468;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: ${(props) => props.color};
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  color: ${(props) => props.color};
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.color};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 560px;
  height: 100%;
  margin-top: -20px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 500px;
  margin: 0 0px 0px 0;
  overflow: hidden;
  padding-right: 0;
`;
