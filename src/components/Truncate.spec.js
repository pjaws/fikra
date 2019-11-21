import React from 'react';
import { render } from '../test-utils';
import Truncate from './Truncate';

describe('<Truncate />', () => {
  it('renders with valid children and props', () => {
    const text =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const expectedText = 'Lorem';

    const { getByText } = render(<Truncate max={5}>{text}</Truncate>);

    expect(getByText(expectedText, { exact: false })).toBeInTheDocument();
  });

  it('renders with no children', () => {
    const { getByTestId } = render(<Truncate max={180} />);

    expect(getByTestId('truncate')).toBeInTheDocument();
  });
});
