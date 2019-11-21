import React from 'react';
import { render } from '../test-utils';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<App />);

    const element = getByTestId('app');

    expect(element).toBeInTheDocument();
  });
});
