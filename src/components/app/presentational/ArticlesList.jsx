// map through data using <Article/> component
// Needs a snapshot test

import React from 'react'
import propTypes from 'prop-types'
import Article from '../presentational/Article'

// function component that maps through data and uses Article to create a list 
const allArticles = ( { foundArticles }) => {
  // create an <article> for each article
  return foundArticles.map(article => (
    <article key={foundArticles.title}>
      {/* spread props from article to component */}
      <Article {...article}/>
    </article>
  ))
}

// prop types - allArticle accepts an array in the shape of... 
allArticles.propTypes = {
  // specify shape of data
  foundArticles: propTypes.arrayOf(propTypes.shape({
    title: propTypes.string.isRequired,
    author: propTypes.string,
    description: propTypes.string
  }))
}

export default allArticles
