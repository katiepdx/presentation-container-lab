import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from './Loading';


describe('Loading component', () => {
  afterEach(() => cleanup());
  
  it('displays loading image', () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });
});