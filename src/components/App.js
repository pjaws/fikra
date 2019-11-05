import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Box } from 'rebass/styled-components';

import ChannelList from './ChannelList';
import ThreadList from './ThreadList';
import Thread from './Thread';
import ChannelsApi from '../api/ChannelsApi';
import ThreadsApi from '../api/ThreadsApi';

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
  grid-template-areas: 'channels threads chat';
  grid-template-rows: 100%;
  grid-template-columns: 14em 21em 1fr;
`;

function App() {
  const [channels, setChannels] = useState([]);
  const [channel, setChannel] = useState({});
  const [threads, setThreads] = useState([]);
  const [thread, setThread] = useState({});

  useEffect(() => {
    const nextChannels = ChannelsApi.find();
    setChannels(nextChannels);
  }, []);

  useEffect(() => {
    const nextThreads = ThreadsApi.getByChannelId(channel.id);
    setThreads(nextThreads);
  }, [channel]);

  return (
    <StyledApp>
      <GlobalStyle />
      <ChannelList channels={channels} setChannel={setChannel} />
      <ThreadList threads={threads} setThread={setThread} />
      <Thread thread={thread} />
    </StyledApp>
  );
}

export default App;
