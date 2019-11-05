import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Flex } from 'rebass/styled-components';

function Thread({ thread }) {
  return (
    <Flex flexDirection="column" flexWrap="nowrap" justifyContent="flex-start">
      <Heading as="h1">{thread.title}</Heading>
    </Flex>
  );
}

Thread.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
};

export default Thread;
