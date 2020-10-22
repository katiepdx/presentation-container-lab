// holds the state for search, loading, and article state
// Needs a behavior test

import React, { Component } from 'react'
import { getNewsArticles } from '../services/news-api'
import Loading from '../presentational/Loading'
import Search from '../presentational/Search'
import ArticlesList from '../presentational/ArticlesList'

export default class NewsSearch extends Component {
  // set state 
  state = {
    loading: false,
    search: '',
    foundArticles: []
  }

    handleChange = (e) => {
      this.setState({ search: e.target.value })
    }

    handleClick = async (e) => {
      e.preventDefault();

      // set loading to true to get loading spinner
      this.setState({ loading: true });

      // fetch from api using user's search
      const foundArticles = await getNewsArticles(this.state.search);

      // update state with user's search
      this.setState({ foundArticles: foundArticles, loading: false })
    }

  render() {
        // deconstruct state 
        const { loading, foundArticles } = this.state;

        // conditional rendering 
        if(loading) return <Loading />
    
        // Use array from state
        return (
          <div>
            <Search onChange={this.handleChange} onClick={this.handleClick} />
            <ArticlesList foundArticles={foundArticles}/>
          </div>
        )
      }
  }

