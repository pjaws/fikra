import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';
import { Inbox, Star } from 'react-feather';

import theme from '../utils/theme';
import ChannelList from './ChannelList';

const StyledSidebar = styled(Flex)`
  grid-area: primary-sidebar;
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

const LinkListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: ${theme.space[2]}px;

  &:first-child: {
    margin-top: 0;
  }
`;

const LinkListItemIcon = styled(Box)`
  display: flex;
  align-items: center;
`;

function Sidebar({ channels, setChannel, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledSidebar flexDirection="column" flexWrap="nowrap" {...props}>
      <Links px={3} mt={3}>
        <LinkList>
          <LinkListItem>
            <LinkListItemIcon mr={2}>
              <Inbox size={theme.fontSizes[2]} />
            </LinkListItemIcon>
            Inbox
          </LinkListItem>
          <LinkListItem>
            <LinkListItemIcon mr={2}>
              <Star size={theme.fontSizes[2]} />
            </LinkListItemIcon>
            Favorites
          </LinkListItem>
        </LinkList>
      </Links>
      <ChannelList channels={channels} setChannel={setChannel} />
    </StyledSidebar>
  );
}

Sidebar.propTypes = {
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

export default Sidebar;
