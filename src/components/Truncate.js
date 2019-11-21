import React from 'react';
import PropTypes from 'prop-types';

const Truncate = ({ max, children }) => {
  const truncatedChildren =
    children.length > max ? `${children.substring(0, max)}...` : children;

  return <span data-testid="truncate">{truncatedChildren}</span>;
};

Truncate.propTypes = {
  max: PropTypes.number,
  children: PropTypes.node,
};

Truncate.defaultProps = {
  max: 180,
  children: '',
};

export default Truncate;
