import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import theme from '../utils/theme';

const NavbarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: ${theme.space[4]}px;
  padding: 0 ${theme.space[1]}px;
  color: ${theme.colors.grays[1]};
  text-decoration: none;

  &:first-child {
    margin-left: ${theme.space[3]}px;
  }

  &:hover {
    color: ${theme.colors.offwhite};
  }
`;

const NavbarItemIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${theme.space[2]}px;
`;

const NavbarItemText = styled.div`
  font-size: ${theme.fontSizes[1]}px;
  line-height: 1;
`;

const TopNavbarItem = ({ Icon, title, url, ...rest }) => {
  return (
    <NavbarItem
      to={url}
      activeStyle={{
        borderBottom: `3px solid ${theme.colors.offwhite}`,
        color: theme.colors.offwhite,
      }}
      {...rest}
    >
      <NavbarItemIcon>
        <Icon size={theme.fontSizes[2]} />
      </NavbarItemIcon>
      <NavbarItemText>{title}</NavbarItemText>
    </NavbarItem>
  );
};

TopNavbarItem.propTypes = {
  Icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default TopNavbarItem;
