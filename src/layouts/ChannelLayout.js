import React from 'react';
import PropTypes from 'prop-types';
import { Router } from '@reach/router';
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

const ChannelLayout = ({ channelId, ...rest }) => {
  return (
    <StyledChannelLayout data-testid="ChannelLayout" {...rest}>
      <TopNavbar channelId={channelId} />
      <Router>
        <ThreadLayout default path={`/ch/${channelId}/threads`} />
        {/* <ChatLayout path={`/ch/${channelId}/chat`} />
        <ProjectsLayout path={`/ch/${channelId}/projects`} /> */}
      </Router>
    </StyledChannelLayout>
  );
};

ChannelLayout.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default ChannelLayout;