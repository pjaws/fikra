import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Router } from '@reach/router';

import ThreadList from '../components/ThreadList';
import ThreadsHome from '../components/ThreadsHome';
import Thread from '../components/Thread';

const StyledThreadLayout = styled(Box)`
  grid-area: channel-main;
  display: grid;
  grid-template-columns: 21em 1fr;
  grid-template-areas: 'thread-navbar thread-main';
  height: 100%;
`;

const ThreadLayout = () => {
  return (
    <StyledThreadLayout data-testid="ThreadLayout">
      <ThreadList />
      <Router>
        <ThreadsHome default path="/" />
        <Thread path="/:threadId" />
      </Router>
    </StyledThreadLayout>
  );
};

export default ThreadLayout;
