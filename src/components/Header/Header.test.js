import React from 'react';
import { render, screen } from 'test-utils';
import Header from './Header';

jest.mock('@/components/ThemeSwitch', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((props) => {
    return <div role='switch'></div>;
  }),
}));

const renderHeader = (props) => {
  const utils = render(<Header {...props} />);
  const header = utils.container.firstChild;
  return { ...utils, header };
};

describe('Header', () => {
  it('renders and matches snapshot', () => {
    const { header } = renderHeader();
    expect(header).toBeTruthy();
    expect(header).toMatchSnapshot();
  });
  it('shows Your Name intro', () => {
    renderHeader();
    const yourName = screen.getByText('Your Name');
    expect(yourName).toBeInTheDocument();
  });
});
