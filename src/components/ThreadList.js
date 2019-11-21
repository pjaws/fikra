import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Heading, Text } from 'rebass/styled-components';
import theme from '../utils/theme';
import Truncate from './Truncate';

const Container = styled(Box)`
  grid-area: secondary-sidebar;
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: ${theme.space[1]}px;
  padding: ${theme.space[1]}px;

  &:first-child {
    margin-top: 0;
  }
`;

function ThreadList({ threads, setThread }) {
  return (
    <Container bg={theme.colors.grays[0]} p={3}>
      <List>
        {threads.map((thread) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
          <ListItem key={thread.id} onClick={() => setThread(thread)}>
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
          </ListItem>
        ))}
      </List>
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
  setThread: PropTypes.func.isRequired,
};

export default ThreadList;
