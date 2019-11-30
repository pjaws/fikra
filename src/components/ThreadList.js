import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Heading, Text } from 'rebass/styled-components';
import { NavLink, useParams } from 'react-router-dom';
import { Edit } from 'react-feather';

import theme from '../utils/theme';
import Truncate from './Truncate';

const Container = styled(Box)`
  grid-area: thread-navbar;
  display: flex;
  flex-flow: column nowrap;
`;

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  /* margin-top: ${theme.space[1]}px; */
  &:hover {
    background: ${theme.colors.grays[1]};
  }

  &:first-child {
    margin-top: 0;
  }

  & > a {
    display: flex;
    align-items: center;
    padding: ${theme.space[3]}px;
    text-decoration: none;
    color: inherit;
  }
`;

const NewThreadLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${theme.space[2]}px ${theme.space[3]}px;
  text-decoration: none;
  color: inherit;
`;

const NewThreadText = styled.p`
  line-height: 1;
`;

const NewThreadIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${theme.space[2]}px;
`;

function ThreadList({ threads }) {
  const { channelId } = useParams();

  return (
    <Container bg={theme.colors.grays[0]}>
      <NewThreadLink to={`/ch/${channelId}/threads/new`}>
        <NewThreadText>Start a new thread</NewThreadText>
        <NewThreadIcon>
          <Edit size={theme.fontSizes[2]} />
        </NewThreadIcon>
      </NewThreadLink>
      {threads && (
        <List>
          {threads.map((thread) => (
            <ListItem key={thread.id}>
              <NavLink
                to={`/ch/${channelId}/threads/${thread.id}`}
                activeStyle={{ background: theme.colors.grays[1] }}
              >
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
              </NavLink>
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
