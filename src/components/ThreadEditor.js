import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMde from 'react-mde';
import ReactMarkdown from 'react-markdown';
import { Button } from 'rebass/styled-components';
import 'react-mde/lib/styles/css/react-mde-all.css';

import theme from '../utils/theme';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;

  & .mde-text:focus {
    outline: none;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin-top: ${theme.space[3]}px;
  padding-bottom: ${theme.space[3]}px;
`;

const ThreadEditor = () => {
  const [thread, setThread] = useState('');
  const [selectedTab, setSelectedTab] = useState('write');

  return (
    <Container>
      <ReactMde
        value={thread}
        onChange={setThread}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={
          (markdown) => Promise.resolve(<ReactMarkdown source={markdown} />)
          // eslint-disable-next-line react/jsx-curly-newline
        }
      />
      <ButtonRow>
        <Button variant="outline" mr={2}>
          Discard
        </Button>
        <Button variant="primary" mr={2}>
          Save
        </Button>
      </ButtonRow>
    </Container>
  );
};

export default ThreadEditor;
