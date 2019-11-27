import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Heading } from 'rebass/styled-components';
import { NavLink } from 'react-router-dom';
import { Hash } from 'react-feather';

import theme from '../utils/theme';

const Container = styled(Box)`
  font-size: ${theme.fontSizes[2]}px;
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-top: ${theme.space[1]}px;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    color: ${theme.colors.grays[2]};
  }

  & > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
`;

const ListItemIcon = styled(Box)`
  display: flex;
  align-items: center;
`;

function ChannelList({ channels }) {
  return (
    <Container px={3} mt={3}>
      <Heading
        fontSize={1}
        as="h2"
        mb={2}
        css={{ letterSpacing: 'calc(14px * 0.02)' }}
      >
        Channels
      </Heading>
      <List>
        {channels.map((channel) => (
          <ListItem key={channel.id}>
            <NavLink
              to={`/ch/${channel.id}`}
              activeStyle={{ color: theme.colors.grays[2] }}
            >
              <ListItemIcon mr={2}>
                <Hash size={theme.fontSizes[2]} />
              </ListItemIcon>
              {channel.title}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

ChannelList.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ).isRequired,
};

export default ChannelList;
