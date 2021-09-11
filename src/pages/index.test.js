import React from 'react';
import { render } from 'test-utils';
import Home from './Index';

jest.mock('next/image', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((props) => {
    return <div role='image'>{JSON.stringify(props)}</div>;
  }),
}));

const renderHome = (props) => {
  const utils = render(<Home {...props} />);
  const home = utils.container.firstChild;
  return { ...utils, home };
};

describe('Home', () => {
  it('renders and matches snapshot', () => {
    const { home } = renderHome();
    expect(home).toBeTruthy();
    expect(home).toMatchSnapshot();
  });
});
