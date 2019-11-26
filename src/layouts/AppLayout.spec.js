import React from 'react';
// eslint-disable-next-line import/named
import { render, fireEvent, wait } from '../utils/test-utils';

import channels from '../__fixtures__/channels';
import AppLayout from './AppLayout';

describe('<AppLayout />', () => {
  it('renders without crashing with valid props', () => {
    const { getByTestId } = render(<AppLayout channels={channels} />);

    expect(getByTestId('AppLayout')).toBeInTheDocument();
  });

  it('renders the correct children by default', () => {
    const { getByTestId } = render(<AppLayout channels={channels} />);

    expect(getByTestId('SideNavbar')).toBeInTheDocument();
    expect(getByTestId('Feed')).toBeInTheDocument();
  });

  it('renders ChannelLayout when a channel link is clicked', async () => {
    const { getByText, getByTestId } = render(
      <AppLayout channels={channels} />,
    );

    const channelLink = getByText('Design');

    fireEvent.click(channelLink);

    await wait(() => {
      expect(getByTestId('ChannelLayout')).toBeInTheDocument();
    });
  });
});
