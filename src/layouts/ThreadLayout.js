import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';

import ThreadApi from '../api/ThreadApi';
import ThreadList from '../components/ThreadList';
import ThreadsHome from '../components/ThreadsHome';
import ThreadEditor from '../components/ThreadEditor';
import Thread from '../components/Thread';

const StyledThreadLayout = styled(Box)`
  grid-area: channel-main;
  display: grid;
  grid-template-columns: 21em 1fr;
  grid-template-areas: 'thread-navbar thread-main';
  height: 100%;
`;

const ThreadLayout = () => {
  const { channelId } = useParams();
  const match = useRouteMatch();
  const [threads, setThreads] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const nextThreads = await ThreadApi.getByChannelId(channelId);
        setThreads(nextThreads);
      } catch (e) {
        setError(e);
      }
    };

    fetchThreads();
  }, [channelId]);

  return (
    <StyledThreadLayout data-testid="ThreadLayout">
      {error && <div>{error}</div>}
      {threads && (
        <>
          <ThreadList threads={threads} />
          <Switch>
            <Route exact path={match.path}>
              <ThreadsHome />
            </Route>
            <Route exact path={`${match.path}/new`}>
              <ThreadEditor />
            </Route>
            <Route path={`${match.path}/:threadId`}>
              <Thread />
            </Route>
          </Switch>
        </>
      )}
    </StyledThreadLayout>
  );
};

export default ThreadLayout;
