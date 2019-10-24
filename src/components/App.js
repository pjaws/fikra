import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  body {
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ul[class],
  ol[class] {
    padding: 0;
    list-style: none;
  }
  img {
    max-width: 100%;
    display: block;
  }
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
