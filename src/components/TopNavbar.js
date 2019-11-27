import React from 'react';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
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
  z-index: 1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
`;

const TopNavbar = () => {
  const match = useRouteMatch();

  return (
    <StyledTopNavbar>
      <TopNavbarItem Icon={List} title="Threads" url={`${match.url}/threads`} />
      <TopNavbarItem
        Icon={MessageSquare}
        title="Chat"
        url={`${match.url}/chat`}
      />
      <TopNavbarItem
        Icon={Clipboard}
        title="Projects"
        url={`${match.url}/projects`}
      />
    </StyledTopNavbar>
  );
};

export default TopNavbar;
