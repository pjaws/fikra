import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMde from 'react-mde';
import ReactMarkdown from 'react-markdown';
import { Button } from 'rebass/styled-components';
import { Input } from '@rebass/forms';
import { Formik } from 'formik';
import { useRouteMatch, useParams } from 'react-router-dom';
import 'react-mde/lib/styles/css/react-mde-all.css';

import theme from '../utils/theme';
import ThreadApi from '../api/ThreadApi';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;

  & .mde-text:focus {
    outline: none;
  }
`;

const Form = styled.form`
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

const ThreadEditor = ({ history, location, initialThread }) => {
  const [selectedTab, setSelectedTab] = useState('write');
  const match = useRouteMatch();
  const { channelId } = useParams();

  console.log('location', location);
  console.log('match', match);

  const handleSave = async (values) => {
    // setSubmitting(true);
    const newThread = {
      ...values,
      channelId,
    };
    try {
      const result = await ThreadApi.create(newThread);
      console.log(result);
      console.log(location);
      history.push(`/ch/${channelId}/threads/${result.id}`);
    } catch (e) {
      console.log(e);
    } finally {
      // setSubmitting(false);
    }
  };

  return (
    <Container>
      <Formik initialValues={initialThread} onSubmit={handleSave}>
        {({
          values,
          // errors,
          // touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              id="threadMembers"
              name="members"
              type="text"
              placeholder="Members"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.members}
            />
            <Input
              id="threadTitle"
              name="title"
              type="text"
              placeholder="Title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <ReactMde
              onChange={handleChange}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              name="body"
              value={values.body}
              textAreaProps={{
                name: 'body',
                value: values.body,
                placeholder: 'Your next masterpiece awaits.',
                onChange: handleChange,
              }}
              generateMarkdownPreview={
                (markdown) =>
                  Promise.resolve(<ReactMarkdown source={markdown} />)
                // eslint-disable-next-line react/jsx-curly-newline
              }
            />
            <ButtonRow>
              <Button variant="outline" mr={2} disabled={isSubmitting}>
                Discard
              </Button>
              <Button
                variant="primary"
                mr={2}
                type="submit"
                disabled={isSubmitting}
              >
                Save
              </Button>
            </ButtonRow>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

ThreadEditor.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
  initialThread: PropTypes.shape({
    members: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

ThreadEditor.defaultProps = {
  initialThread: {
    channelId: '',
    members: '',
    title: '',
    body: '',
  },
};

export default ThreadEditor;
