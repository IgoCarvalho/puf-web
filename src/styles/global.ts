import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
}

ul, ol {
  list-style: none;
}

html {
  font-size: 62.5%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
}

body, button, input {
  font-size: 1.6rem;
  font-family: sans-serif;
}

  html, body, #root {
    height: 100%;
  }
`;
