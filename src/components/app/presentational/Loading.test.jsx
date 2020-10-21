import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from './Loading';


describe('App component', () => {
  afterEach(() => cleanup());
  
  it('renders NewsSearch', () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });
});