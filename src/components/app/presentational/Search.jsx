// Displays the form used to search for articles by term
// Needs a snapshot test

import React from 'react'
import propTypes from 'prop-types'

const Search = ({ text, onChange, onClick }) => (
  <div>
    <label>Search</label>
    <input
    id="text"
    type="text"
    name="text"
    value={text}
    onChange={onChange}
    />
    <button onClick={onClick}>Go!</button>
  </div>
);

// prop types 
Search.propTypes = {
  text: propTypes.string,
  onChange: propTypes.func.isRequired,
  onClick: propTypes.func.isRequired
}

export default Search;
