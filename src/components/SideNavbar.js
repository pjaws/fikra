import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';
import { Inbox, Star, Activity } from 'react-feather';

import theme from '../utils/theme';
import ChannelList from './ChannelList';
import SideNavbarListItem from './SideNavbarItem';

const StyledSidebar = styled(Flex)`
  grid-area: side-navbar;
  transition: all 0.3s ease;
  background: ${theme.colors.grays[5]};
  color: ${theme.colors.offwhite};
`;

const Links = styled(Box)`
  overflow-y: auto;
  overflow-x: hidden;
`;

const LinkList = styled.ul`
  list-style-type: none;
`;

function SideNavbar({ channels, ...rest }) {
  return (
    <StyledSidebar
      data-testid="SideNavbar"
      flexDirection="column"
      flexWrap="nowrap"
      {...rest}
    >
      <Links px={3} mt={3}>
        <LinkList>
          <SideNavbarListItem Icon={Activity} title="Feed" url="/feed" />
          <SideNavbarListItem Icon={Inbox} title="Inbox" url="/inbox" />
          <SideNavbarListItem Icon={Star} title="Favorites" url="/favorites" />
        </LinkList>
      </Links>
      <ChannelList channels={channels} />
    </StyledSidebar>
  );
}

SideNavbar.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ).isRequired,
  setChannel: PropTypes.func.isRequired,
};

export default SideNavbar;
