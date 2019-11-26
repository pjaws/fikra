import React from 'react';
import styled from 'styled-components';
import { List, MessageSquare, Clipboard } from 'react-feather';

import theme from '../utils/theme';
import TopNavbarItem from './TopNavbarItem';

const StyledTopNavbar = styled.nav`
  width: 100%;
  grid-area: top-navbar;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
`;

const TopNavbar = () => {
  return (
    <StyledTopNavbar>
      <TopNavbarItem Icon={List} title="Threads" url="threads" />
      <TopNavbarItem Icon={MessageSquare} title="Chat" url="chat" />
      <TopNavbarItem Icon={Clipboard} title="Projects" url="projects" />
    </StyledTopNavbar>
  );
};

export default TopNavbar;
