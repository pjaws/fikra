import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';
import { Router } from '@reach/router';

import SideNavbar from '../components/SideNavbar';
import Feed from '../components/Feed';
import ChannelLayout from './ChannelLayout';

const StyledAppLayout = styled(Box)`
  display: grid;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  grid-template-areas: 'side-navbar app-main';
  grid-template-rows: 100%;
  grid-template-columns: 14em 1fr;
`;

const AppLayout = ({ channels, ...rest }) => {
  return (
    <StyledAppLayout data-testid="AppLayout" {...rest}>
      <SideNavbar channels={channels} />
      <Router>
        <Feed default path="/feed" />
        <ChannelLayout path="/ch/:channelId" />
      </Router>
    </StyledAppLayout>
  );
};

AppLayout.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ).isRequired,
};

export default AppLayout;
