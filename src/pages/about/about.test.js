import React from 'react';
import { render } from 'test-utils';
import About from './Index';

jest.mock('next/image', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((props) => {
    return <div role='image'>{JSON.stringify(props)}</div>;
  }),
}));

const renderAbout = (props) => {
  const utils = render(<About {...props} />);
  const about = utils.container.firstChild;
  return { ...utils, about };
};

describe('About', () => {
  it('renders and matches snapshot', () => {
    const { about } = renderAbout();
    expect(about).toBeTruthy();
    expect(about).toMatchSnapshot();
  });
});
