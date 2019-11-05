import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';
import theme from '../utils/theme';

const StyledThreadList = styled(Box)`
  grid-area: threads;
`;

function ThreadList({ threads, setThread }) {
  return (
    <StyledThreadList bg={theme.colors.grays[0]} p={3}>
      <ul>
        {threads.map((thread) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
          <li key={thread.id} onClick={() => setThread(thread)}>
            {thread.title}
          </li>
        ))}
      </ul>
    </StyledThreadList>
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
