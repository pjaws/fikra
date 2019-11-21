import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Flex, Box } from 'rebass/styled-components';

const ThreadParagraph = styled.p`
  line-height: 1.5;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;

function Thread({ thread }) {
  return (
    <Box as="article">
      <Flex
        as="section"
        flexDirection="column"
        flexWrap="nowrap"
        justifyContent="flex-start"
        p={4}
      >
        <header>
          <Heading as="h1">{thread.title}</Heading>
        </header>
        <Box as="main" mt={2}>
          <ThreadParagraph as="p">{thread.body}</ThreadParagraph>
        </Box>
      </Flex>
    </Box>
  );
}

Thread.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }).isRequired,
};

export default Thread;
