// Display a list of <Article/> components
// Needs a snapshot test

import React, { Component } from 'react'
import Loading from '../presentational/Loading'

export default class ArticlesList extends Component {
  // set state - loading is true 
  state = {
    loading: true
  }

  render() {
    // deconstruct state 
    const { loading } = this.state;

    // conditional rendering 
    if(loading) return <Loading />

    else return (
      <div>
        Not loading 
      </div>
    )
  }
}
