import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 40px;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
  * {
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
      -webkit-appearance: none;
  }
  ::-webkit-scrollbar:vertical {
      width: 10px;
  }
  ::-webkit-scrollbar:horizontal {
      height: 10px;
  }
  ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, .5);
      border-radius: 10px;
      border: 2px solid #ffffff;
  }
  ::-webkit-scrollbar-track {
      background-color: #ffffff;
  }
`;
