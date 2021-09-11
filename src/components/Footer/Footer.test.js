import React from 'react';
import { render } from 'test-utils';
import Footer from './Footer';

const renderFooter = (props) => {
  const utils = render(<Footer {...props} />);
  const footer = utils.container.firstChild;
  return { ...utils, footer };
};

describe('Footer', () => {
  it('renders and matches snapshot', () => {
    const { footer } = renderFooter();
    expect(footer).toBeTruthy();
    expect(footer).toMatchSnapshot();
  });
});
