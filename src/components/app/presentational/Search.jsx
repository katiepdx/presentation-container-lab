// Displays the form used to search for articles by term
// Needs a snapshot test

import React from 'react'
import propTypes from 'prop-types'

const Search = ({ text, onChange, onClick }) => (
  <div>
    <label data-testid="Search">Search</label>
    <input
    data-testid="search-input"
    id="text"
    type="text"
    name="text"
    value={text}
    onChange={onChange}
    />
    <button data-testid="search-button" onClick={onClick}>Go!</button>
  </div>
);

// prop types 
Search.propTypes = {
  text: propTypes.string,
  onChange: propTypes.func,
  onClick: propTypes.func
}

export default Search;