// Display a list of <Article/> components
// Needs a snapshot test

import React, { Component } from 'react'
import Loading from '../presentational/Loading'
import { getNewsArticles } from '../services/news-api'

export default class ArticlesList extends Component {
  // set state 
  state = {
    loading: true,
    userSearch: 'bitcoin',
    foundArticles: []
  }

  // when page loads, fetch from API, update state, and change loading to false
  async componentDidMount() {
    // fetch from api using user's search
    const foundArticles = await getNewsArticles();
  
    // set state 
    this.setState({ foundArticles: foundArticles, loading: false})
  }

  render() {
    // deconstruct state 
    const { loading, foundArticles } = this.state;

    console.log(foundArticles, 'ARTICLES LIST IN STATE IN RENDER')
    // conditional rendering 
    if(loading) return <Loading />

    return (
      <div>
        not loading
      </div>
    )
  }
}
