import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Flex } from 'rebass/styled-components';

import Channels from '../components/Channels';
import Threads from '../components/Threads';
import theme from '../utils/theme';

const StyledAppLayout = styled(Box)`
  display: grid;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  grid-template-areas: 'channels threads chat';
  grid-template-rows: 100%;
  grid-template-columns: 14em 21em 1fr;
`;

const AppLayout = ({ children, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledAppLayout {...props}>
      <Channels />
      <Threads />
      <Flex p={4} bg={theme.colors.offwhite}>
        {children}
      </Flex>
    </StyledAppLayout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
