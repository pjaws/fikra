import React from 'react';
import { render } from '../utils/test-utils';

import channels from '../__fixtures__/channels';
import AppLayout from './AppLayout';

describe('AppLayout', () => {
  it('renders without crashing with valid props', () => {
    const { getByTestId } = render(<AppLayout channels={channels} />);

    expect(getByTestId('AppLayout')).toBeInTheDocument();
  });

  it('renders the Feed component by default', () => {
    const { getByTestId } = render(<AppLayout channels={channels} />);

    expect(getByTestId('Feed')).toBeInTheDocument();
  });
});
