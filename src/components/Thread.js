import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';
import { Heading, Flex, Box } from 'rebass/styled-components';

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
          <ReactMarkdown source={thread.body} escapeHtml={false} />
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
