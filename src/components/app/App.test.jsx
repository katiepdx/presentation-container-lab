import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from './presentational/Loading';

describe('App component', () => {
  afterEach(() => cleanup());
  
  it('renders loading spinner', () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });
});
