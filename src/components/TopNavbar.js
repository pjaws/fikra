import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '@reach/router';

const StyledTopNavbar = styled.nav`
  width: 100%;
  grid-area: top-navbar;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`;

const TopNavbar = ({ channelId, ...rest }) => {
  return (
    <StyledTopNavbar {...rest}>
      <Link to={`/ch/${channelId}/threads`}>Threads</Link>
      <Link to={`/ch/${channelId}/chat`}>Chat</Link>
      <Link to={`/ch/${channelId}/projects`}>Projects</Link>
    </StyledTopNavbar>
  );
};

TopNavbar.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default TopNavbar;
