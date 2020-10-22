import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ArticlesList from './ArticlesList'

describe('ArticlesList Component', () => {
  afterEach(() => cleanup());

  it('renders ArticlesList', () => {
    // snapshot fragment and render ArticlesList (pass test data array props)
    const { asFragment } = render(<ArticlesList
        foundArticles={[
          {
            title: 'Article Title 1',
            author: 'Author 1',
            description: 'Description 1',
            key: 'Article Title 1'
          },{
            title: 'Article Title 2',
            author: 'Author 2',
            description: 'Description 2',
            key: 'Article Title 2'
          },{
            title: 'Article Title 3',
            author: 'Author 3',
            description: 'Description 3',
            key: 'Article Title 3'
          }
        ]}
      />);
      // expect that the snapshot matches the asFragment
      expect(asFragment()).toMatchSnapshot();
  })
})
