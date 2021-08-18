import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: auto;
    width: 80%;

    @media screen and (min-width: 600px) {
      height: auto;
      width: 60%;
    }

    @media screen and (min-width: 850px) {
      height: auto;
      width: 40%;
    }

    @media screen and (min-width: 1450px) {
      height: auto;
      width: 30%;
    }
  }
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #000000;
`;
