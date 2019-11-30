import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

import ChannelApi from '../api/ChannelApi';
import AppLayout from '../layouts/AppLayout';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body, h1, h2, h3, h4, p, ul[class], ol[class], li, figure, figcaption, blockquote, dl, dd {
    margin: 0;
  }
  html {
    min-height: 100%;
    width: 100%;
  }
  body {
    height: 100%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  p {
    line-height: 1.5;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
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
  #root {
    height: 100%;
    width: 100%;
  }
`;

const App = () => {
  const [channels, setChannels] = useState([]);

  const fetchChannels = async () => {
    const nextChannels = await ChannelApi.find();
    setChannels(nextChannels);
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppLayout channels={channels} />
    </>
  );
};

export default App;
