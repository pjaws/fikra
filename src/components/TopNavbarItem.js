import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '@reach/router';

import theme from '../utils/theme';

const NavbarItem = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: ${theme.space[4]}px;
  padding: 0 ${theme.space[1]}px;
  color: ${theme.colors.offwhite};
  text-decoration: none;
  border-bottom: ${(props) =>
    props.active ? `2px solid ${theme.colors.offwhite}` : 'none'};

  &:first-child {
    margin-left: ${theme.space[3]}px;
  }

  &:hover {
    color: ${theme.colors.grays[1]};
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
    <NavbarItem to={url} {...rest}>
      <NavbarItemIcon>
        <Icon size={theme.fontSizes[2]} />
      </NavbarItemIcon>
      <NavbarItemText>{title}</NavbarItemText>
    </NavbarItem>
  );
};

TopNavbarItem.propTypes = {
  Icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default TopNavbarItem;
