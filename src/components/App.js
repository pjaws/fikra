import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Box } from 'rebass/styled-components';

import Sidebar from './Sidebar';
import ThreadList from './ThreadList';
import Thread from './Thread';
import ChannelApi from '../api/ChannelApi';
import ThreadApi from '../api/ThreadApi';

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

const StyledApp = styled(Box)`
  display: grid;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  grid-template-areas: 'primary-sidebar secondary-sidebar main';
  grid-template-rows: 100%;
  grid-template-columns: 14em 21em 1fr;
`;

function App() {
  const [channels, setChannels] = useState([]);
  const [channel, setChannel] = useState({});
  const [threads, setThreads] = useState([]);
  const [thread, setThread] = useState({});

  useEffect(() => {
    const nextChannels = ChannelApi.find();
    setChannels(nextChannels);
  }, []);

  useEffect(() => {
    const nextThreads = ThreadApi.getByChannelId(channel.id);
    setThreads(nextThreads);
  }, [channel]);

  return (
    <StyledApp data-testid="app">
      <GlobalStyle />
      <Sidebar channels={channels} setChannel={setChannel} />
      <ThreadList threads={threads} setThread={setThread} />
      <Thread thread={thread} />
    </StyledApp>
  );
}

export default App;
