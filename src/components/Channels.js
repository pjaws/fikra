import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import theme from '../utils/theme';

const StyledChannels = styled(Box)`
  grid-area: channels;
`;

const Channels = () => {
  return (
    <StyledChannels bg={theme.colors.grays[0]} p={3}>
      Channels
    </StyledChannels>
  );
};

export default Channels;
