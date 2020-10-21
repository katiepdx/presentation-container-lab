// Snapshot the article component using test info 

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article'

describe('Article component', () => {
  afterAll(() => cleanup());

  it('renders Article', () => {
    // snapshot fragment and render Article (pass test props)
    const { asFragment } = render(<Article
      title="Cool Article"
      author="Cool Author"
      description="Cool article description goes here"
      />);
      // expect that the snapshot matches the asFragment
      expect(asFragment()).toMatchSnapshot();
  })
});
