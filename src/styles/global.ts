import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFF;
    --background: #333;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    font: Poppins, Arial, Helverica, sans-serif;
    background: var(--background);
    color: var(--white);
  }

  //REM - 1rem === font-size
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //16px * 0,9375 = 15px;
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //16px * 0,875 = 14px;
    }
  }

  input, textarea {
    font-family: "Poppins";
    outline: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
