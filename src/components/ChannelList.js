import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';
import theme from '../utils/theme';

const StyledChannelList = styled(Box)`
  grid-area: channels;
`;

function ChannelList({ channels, setChannel }) {
  return (
    <StyledChannelList bg={theme.colors.offwhite} p={3}>
      <ul>
        {channels.map((channel) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
          <li key={channel.id} onClick={() => setChannel(channel)}>
            {channel.title}
          </li>
        ))}
      </ul>
    </StyledChannelList>
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
