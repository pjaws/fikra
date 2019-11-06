import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Heading } from 'rebass/styled-components';
import { Hash } from 'react-feather';

import theme from '../utils/theme';

const Container = styled(Box)`
  font-size: ${theme.fontSizes[2]}px;
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: ${theme.space[1]}px;

  &:first-child {
    margin-top: 0;
  }
`;

const ListItemIcon = styled(Box)`
  display: flex;
  align-items: center;
`;

function ChannelList({ channels, setChannel }) {
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
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
          <ListItem key={channel.id} onClick={() => setChannel(channel)}>
            <ListItemIcon mr={2}>
              <Hash size={theme.fontSizes[2]} />
            </ListItemIcon>
            {channel.title}
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
  setChannel: PropTypes.func.isRequired,
};

export default ChannelList;
