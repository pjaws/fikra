import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '@reach/router';

import theme from '../utils/theme';

const ListItem = styled.li`
  margin-top: ${theme.space[1]}px;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    color: ${theme.colors.grays[2]};
  }

  & > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
`;

const ListItemIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${theme.space[2]}px;
`;

const SideNavbarItem = ({ Icon, title, url, ...rest }) => {
  return (
    <ListItem {...rest}>
      <Link to={url}>
        <ListItemIcon>
          <Icon size={theme.fontSizes[2]} />
        </ListItemIcon>
        {title}
      </Link>
    </ListItem>
  );
};

SideNavbarItem.propTypes = {
  Icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SideNavbarItem;
