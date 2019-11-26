import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';

import TopNavbar from '../components/TopNavbar';
import ThreadLayout from './ThreadLayout';

const StyledChannelLayout = styled(Box)`
  display: grid;
  grid-template-rows: 40px 1fr;
  grid-template-areas:
    'top-navbar'
    'channel-main';
  height: 100%;
`;

const ChannelLayout = ({ ...props }) => {
  const match = useRouteMatch();
  const { channelId } = useParams();

  return (
    <StyledChannelLayout data-testid="ChannelLayout" {...props}>
      <TopNavbar />
      <Switch>
        <Route exact path={match.path}>
          <Redirect to={`/ch/${channelId}/threads`} />
        </Route>
        <Route path={`${match.path}/threads`}>
          <ThreadLayout />
        </Route>
        {/* <ChatLayout path={`/ch/${channelId}/chat`} />
        <ProjectsLayout path={`/ch/${channelId}/projects`} /> */}
      </Switch>
    </StyledChannelLayout>
  );
};

export default ChannelLayout;
