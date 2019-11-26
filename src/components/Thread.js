import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown/with-html';
import { Heading } from 'rebass/styled-components';

import ThreadApi from '../api/ThreadApi';

const StyledThread = styled.article`
  grid-area: thread-main;
`;

const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: ${(props) => props.theme.space[4]}px;
`;

const Main = styled.main`
  margin-top: ${(props) => props.theme.space[2]}px;
`;

function Thread() {
  const { threadId } = useParams();
  const [thread, setThread] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchThread = async () => {
      try {
        const nextThread = await ThreadApi.get(threadId);
        setThread(nextThread);
      } catch (e) {
        setError(e);
      }
    };

    fetchThread();
  }, [threadId]);

  return (
    <StyledThread>
      {error && <div>{error}</div>}
      {thread && (
        <Section>
          <header>
            <Heading as="h1">{thread.title}</Heading>
          </header>
          <Main>
            <ReactMarkdown source={thread.body} escapeHtml={false} />
          </Main>
        </Section>
      )}
    </StyledThread>
  );
}

export default Thread;
