// Display an article's title, author, and description
// Needs a snapshot test

import React from 'react';
import propTypes from 'prop-types';

// deconstruct props
const Article = ({ title, author, description }) => (
  <div>
    <h2>{title}</h2>
    <h6>{author}</h6>
    <p>{description}</p>
  </div>
)

// prop types 
Article.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string,
  description: propTypes.string
};

// export function component 
export default Article;
