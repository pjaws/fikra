import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Heading, Text } from 'rebass/styled-components';
import { Link } from '@reach/router';

import theme from '../utils/theme';
import Truncate from './Truncate';

const Container = styled(Box)`
  grid-area: thread-navbar;
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin-top: ${theme.space[1]}px;
  padding: ${theme.space[1]}px;

  &:hover {
    background: ${theme.colors.grays[3]};
  }

  &:first-child {
    margin-top: 0;
  }

  & > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
`;

function ThreadList({ threads }) {
  return (
    <Container bg={theme.colors.grays[0]} p={3}>
      {threads && (
        <List>
          {threads.map((thread) => (
            <ListItem key={thread.id}>
              <Link to={`/${thread.id}`}>
                <section>
                  <header>
                    <Heading as="h1" fontSize={2}>
                      {thread.title}
                    </Heading>
                  </header>
                  <Box as="article" mt={1}>
                    <Text fontSize={1}>
                      <Truncate max={180}>{thread.body}</Truncate>
                    </Text>
                  </Box>
                </section>
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      channelId: PropTypes.string,
      title: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ).isRequired,
};

export default ThreadList;
