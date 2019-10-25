import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import theme from '../utils/theme';

const StyledThreads = styled(Box)`
  grid-area: threads;
`;

const Threads = () => {
  return (
    <StyledThreads bg={theme.colors.grays[1]} p={3}>
      Threads
    </StyledThreads>
  );
};

export default Threads;
